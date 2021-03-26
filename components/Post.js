import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import CodeBlock from "./CodeBlock";
import "github-markdown-css";
export default function Post({ cover_image, title, createdAt, content }) {
  return (
    <div className="h-full px-8">
      <div className="flex-col justify-center items-start max-w-3xl mx-auto space-y-6 pb-10">
        {cover_image && <img src={cover_image} className=".object-cover"></img>}
        <h1 className="font-bold text-4xl md:text-6xl tracking-tight text-black dark:text-white mb-10">
          {title}
        </h1>
        <p className="text-sm  text-gray-600 dark:text-gray-400 m-10">
          Published at <Moment date={createdAt} format="YYYY/MM/DD hh:mm:ss" />
        </p>
        <hr></hr>
        <ReactMarkdown
          className="md:text-xl text-gray-600 dark:text-white w-full markdown-body"
          children={content}
          renderers={{
            code: CodeBlock,
          }}
        />
      </div>
    </div>
  );
}
