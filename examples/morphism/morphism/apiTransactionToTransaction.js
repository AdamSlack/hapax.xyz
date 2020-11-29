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