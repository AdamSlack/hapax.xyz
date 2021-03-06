import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburst as style } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = (props) => {
  const { language, value } = props;
  const numberOfLines = value.split('\n').length
  const lineNumbers = Array.from(
    { length: numberOfLines }, 
    (_, idx) => idx + 1,
  )
  return (
    <div className="codeContainer">
      <div>
        <ul className="codeLineNumbers">
          {lineNumbers.map((lineNumber) => <li key={lineNumber}>{lineNumber}</li>)}
        </ul>
      </div>
      <SyntaxHighlighter language={language} style={style}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;