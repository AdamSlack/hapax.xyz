# Middy Morphisms: Lambda API Gateway Body Transforms

AWS Lambda are most effective when performing one simple job. Often that simple job will follow the following steps:
1. Take data from somewhere
2. Transform Data
3. Pass the data along

Whether it is recieving data as input via a HTTP request through API Gateway, or fetching data from some other data source having a consistent approach to transforming data can help reduce the complexity of a code base. Tools like [morphism](https://github.com/nobrainr/morphism) can be used to prescribe a format to implementing data transforms. Tools like [middy](https://github.com/middyjs/middy) can be used shift the data transformation out of the lambda business logic and into middlewares.

This post will show you how to implement and apply a morphism middleware to your lambda.

## Morphism: `apiTransactionToTransaction`

As well as being a mathematics term, morphism is a JS library that allows you to define a transform schema, and then apply that schema to some set of data.

Some useful points to note about the morphism library:
- Performing a morphism to an array of objects will result in the schema being applied to each object in the array
- A morphism schema can be composed of morphism schema
- you can compute values in a morphism schema (e.g. turn an epoch date into an ISO Date String)

The [documentation for morphism](https://github.com/nobrainr/morphism) will provide more detailed insights into the library.

Below is an example morphism schema used to transform a 'Transaction' data object. It is being used in a lambda that decouples the UI from the data source.
```js
const { createSchema } = require('morphism')

const apiTransactionToTransaction = createSchema({
    id: 'id',
    destinationAccountId: 'destinationAccount.id',
    destinationAccountName: 'destinationAccount.name',
    sourceAccountId: 'sourceAccount.id',
    sourceAccountName: 'sourceAccount.name',
    transactionDate: {
        path: 'timestamp',
        fn: (timestamp) => new Date(timestamp).toISOString()
    },
    type: 'type',
    amount: 'amount'
})

module.exports = {
  apiTransactionToTransaction
}
```

## Middy: `TransformResponse`

A Node JS middleware engine for AWS lambda, middy is a tool for ensuring that your lambda implementation is as focused on business logic as possible. Routine tasks like handling errors, validating input, and (as this post is to demonstrate) transforming data, can be abstracted into a set of middy layers. There is extensive set of [middlewares already available](https://github.com/middyjs/middy/tree/master/packages) already available, however it is possible to define custome middy middlewares to meet your own needs.

Below is an example middy layer that will transform the JSON Body response that a lambda might return. 

```js
const { morphism } = require('morphism')

 const TransformResponse = (schema) => ({
  after: async (handler) => {
    const responseBody = JSON.parse(handler.response.body)
    handler.response.body = JSON.stringify(morphism(schema, responseBody))
  }
})

module.exports = {
  TransformResponse
}
```

It it defines a function     that will return a middy object that will run `after` the handler is invoked. This middy object will then take the `handler.response` and apply a schema to the response `body`.

Because the handler in this example is returning a JSON string as the body, it needs to parse and stringify that body. You could use a middy layer that automatically handles creation of a JSON string response from the lambda, meaning the lambda can just return a JSON object directly, and this example would not need to `JSON.parse` or `JSON.stringify` at all.

The same premise can be applied to a `request` that the lambda handler recieves by using implenting a `before` middy layer and applying the morphism to the `handler.event.body`. You may also need to handle a `JSON` string depending on what other middy middlewares you are using.

```js
const { morphism } = require('morphism')

const TransformRequest = (schema) => ({
  before: async (handler) => {
    const body = JSON.parse(handler.event.body);
    handler.event.body = JSON.stringify(morphism(schema, body))
  }
})

module.exports = {
  TransformRequest
}
```

## Using Middy and Morphism with a Lambda

The following code snippet shows a lambda intended to be used with API GateWay. It fetches data from a third party API and returns the response from that API as the response body of the lambda.

This very simple lambda is wrapped using `middy` and is told to `use` the `TransformResponse` middleware that was detailed previously. The transformation being applied is the `apiTransactionToTransaction` that was also previously outlined.

```js
const middy = require('@middy/core')
const axios = require('axios')

const {apiTransactionToTransaction} = require('./morphism/apiTransactionToTransaction')
const { TransformResponse } = require('./middleware/transformResponse')

const fetchTransation = async (event) => {
  const { data } = await axios.get('some-fake-url.com/transactions')
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

const handler = middy(fetchTransation)
  .use(TransformResponse(apiTransactionToTransaction))

module.exports = {
  handler
}
```

When invoked, if the `axios` request to get a set of `transactions` returned the following data:

```json
[
  {
    "id": "1",
    "type": "RECEIVE",
    "amount": 1000.50,
    "destinationAccount": {
      "id": "1234-abcdef-5678",
      "name": "A-A-Ron"
    },
    "sourceAccount": {
      "id": "4321-fedcba-8765",
      "name": "Nick 'BDN' Foles",
    },
    "timestamp": 1600160340000,
  }
]
```

Then this lambda would ultimately respond with the following JSON in the body after applying the middy morphism middleware:

```json
[{ 
  "id": "1",
  "destinationAccountId": "1234-abcdef-5678",
  "destinationAccountName": "A-A-Ron",
  "sourceAccountName": "Nick 'BDN' Foles",
  "sourceAccountId": "4321-fedcba-8765",
  "transactionDate": "2020-09-15T08:59:00.000Z",
  "amount": 1000.5,
  "type": "RECEIVE"
}]
```

### Testing the implementation.

Testing Lambda through exported handler makes it very easy to validate the integration of the middy layers with the actual handler. A simple scenario for the example lambda above might cover when the API responds with some mock data, the assertions made on the lambda's response can confirm if the transformations being made are correct or not.

Below is a simple Jest test that invokes the handler, and then makes assertions on various aspects of the lambda's execution and response.

```js
describe('When API Transactions are recieved', () => {
  let handlerResult = null
  beforeEach(async () => {
    mockAxiosGet.mockResolvedValueOnce({ data: fakeTransactions });
    handlerResult = await handler()
  });

  it('should make an API request for transactions', () => {
    expect(mockAxiosGet).toHaveBeenCalledWith('some-fake-url.com/transactions')
  })

  it('should return with a 200 OK status code', () => {
    expect(handlerResult.statusCode).toEqual(200)
  })

  it('should return transformed transaction objects', () => {
    const body = JSON.parse(handlerResult.body);
    expect(body).toEqual([{ 
      id: '1',
      destinationAccountId: '1234-abcdef-5678',
      destinationAccountName: 'A-A-Ron',
      sourceAccountName: 'Nick "BDN" Foles',
      sourceAccountId: '4321-fedcba-8765',
      transactionDate: '2020-09-15T08:59:00.000Z',
      amount: 1000.5,
      type: 'RECEIVE'
     }])
  })
})
```

## Source Code

The source code for this morphism transform middleware can be found on [GitHub](https://github.com/adamslack/hapax.xyz/tree/master/examples/morphism)