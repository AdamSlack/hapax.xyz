import SyntaxHighlighter from 'react-syntax-highlighter';

export type CodeBlockProps = {
  language: string;
  code: string;
  style: any;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { language, code, style } = props;
  return (
    <SyntaxHighlighter language={language} style={style}>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;