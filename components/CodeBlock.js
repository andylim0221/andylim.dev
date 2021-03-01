import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function CodeBlock({ language = null, value }) {
  return (
    <SyntaxHighlighter className="rounded p-4" language={language} style={atomOneDark}>
      {value}
    </SyntaxHighlighter>
  );
}