
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