import { gradientDark as darkStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { a11yLight as lightStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Grid, useTheme } from "@nextui-org/react"
import { CodeBlock } from "../../components/CodeBlock"
import MainLayout from "../../Layouts/MainLayout"


const code = `const { createSchema } = require('morphism')

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
}`

export const CodeDemoPage = () => {

  const { isDark } = useTheme();
  
  const background = isDark ? '$gray900  !important' : '$gray100  !important'
  const style = isDark ? darkStyle : lightStyle;
  return (
    <MainLayout>
      <Grid xs={12} css={{
        code: {
          w: '100%',
          background: 'none'
        },
        pre: {
          w: '100%',
          background,
        }
      }}>
      <CodeBlock language="javascript" code={code} style={style}/>
      </Grid>
    </MainLayout>
  )
}

export default CodeDemoPage