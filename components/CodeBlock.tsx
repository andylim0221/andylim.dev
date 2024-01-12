import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface ICodeBlock {
  value: string;
}

export default function CodeBlock({ value }: ICodeBlock) {
  return (
    <SyntaxHighlighter className="my-10" style={materialDark}>
      {value}
    </SyntaxHighlighter>
  );
}
