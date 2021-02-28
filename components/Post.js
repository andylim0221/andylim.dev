import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
export default function Post({ title, createdAt, content }) {
  return (
    <div className="h-full md:min-h-screen bg-white dark:bg-black px-8">
      <div className="flex-col justify-center items-start max-w-2xl mx-auto space-y-3 mb-10">
        <article>
          <h1 className="font-bold text-3xl md:text-5xl text-black dark:text-white">
            {title}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <Moment date={createdAt} />
          </p>
          <ReactMarkdown
            className="text-black dark:text-white"
            source={content}
            escapeHtml={false}
          />
        </article>
      </div>
    </div>
  );
}
