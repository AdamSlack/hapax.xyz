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
