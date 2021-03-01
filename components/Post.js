import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import CodeBlock from "./CodeBlock";
export default function Post({ title, createdAt, content }) {
  return (
    <div className="h-full bg-white dark:bg-black px-8">
      <div className="flex-col justify-center items-start max-w-3xl mx-auto space-y-6 pb-10">
        <article>
          <h1 className="font-bold text-4xl md:text-6xl tracking-tight text-black dark:text-white mb-10">
            {title}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
            <Moment date={createdAt} />
          </p>
          <ReactMarkdown
            className="text-black dark:text-white w-full"
            source={content}
            renderers={{
              code: CodeBlock,
            }}
          />
        </article>
      </div>
    </div>
  );
}
