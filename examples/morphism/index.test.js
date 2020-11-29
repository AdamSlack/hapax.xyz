const axios = require('axios')
const { handler } = require('./index')

const mockAxiosGet = jest.spyOn(axios, 'get')

const fakeTransactions = [
  {
    id: '1',
    type: 'RECEIVE',
    amount: 1000.50,
    destinationAccount: {
      id: '1234-abcdef-5678',
      name: 'A-A-Ron'
    },
    sourceAccount: {
      id: '4321-fedcba-8765',
      name: 'Nick "BDN" Foles',
    },
    timestamp: 1600160340000,
  }
]

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