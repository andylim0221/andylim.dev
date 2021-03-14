import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function CodeBlock({ language = null, value }) {
  return (
    <SyntaxHighlighter language={language} style={nightOwl}>
      {value}
    </SyntaxHighlighter>
  );
}