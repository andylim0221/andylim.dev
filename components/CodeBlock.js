import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({ language = null, value }) {
  return (
    <SyntaxHighlighter language={language} style={materialDark}>
      {value}
    </SyntaxHighlighter>
  );
}
