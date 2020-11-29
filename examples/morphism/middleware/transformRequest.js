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