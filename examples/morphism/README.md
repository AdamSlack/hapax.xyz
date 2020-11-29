# Morphism Middleware

This code serves as a supporting example for the post on [hapax.xyz](https://hapax.xyz/posts/MiddyMorphism). That gives some insight into implementing a custom Node JS middy middleware to apply a morphism transformation to the request/response body of an AWS Lambda.

## How To Run

Install dependencies
```
npm install
```

Run tests
```
npm run test
```

## Structure

- `index.js`: An example Lambda Handler
- `index.test.js`: A simple test for the Lambda Handler
- `middleware/`: A folder of example `TransformRequest`/`TransformResponse` middy middleware
- `morphism/`: A folder of example morphism schema intended to be used with the custom morphism middleware