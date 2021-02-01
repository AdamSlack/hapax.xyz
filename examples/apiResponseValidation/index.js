const AJV = require('ajv').default
const axios = require('axios').default

const requestSchema = require('./schema/requestSchema')
const responseSchema = require('./schema/responseSchema')

const ajv = new AJV({ allErrors: true })
const validateRequest = ajv.compile(requestSchema)
const validateResponse = ajv.compile(responseSchema)

const handler = async (event) => {
  const isValidRequest = validateRequest(event)

  if(!isValidRequest) {
    console.log('Invalid Request', JSON.stringify(validateRequest.errors))
    return {  
      statusCode: 400
    }
  }

  const { data } = await axios.get(process.env.SOME_ENDPOINT);

  const isValidResponse = validateResponse(data);

  if(!isValidResponse) {
    console.log('Invalid Response from 3rd party API', JSON.stringify(validateResponse.errors))
    return {
      statusCode: 500,
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

module.exports = {
  handler,
}