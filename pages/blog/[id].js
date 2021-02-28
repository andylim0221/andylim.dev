import ReactMarkdown from "react-markdown";
import Moment from 'react-moment'

export default function Post({ post }) {
    return (
        <div className="h-full md:min-h-screen bg-white dark:bg-black">
            <div className="flex-col justify-center items-start max-w-2xl mx-auto space-y-3">
                <article>
                    <h1 className="font-bold text-3xl md:text-5xl text-black dark:text-white">
                        {post.title}
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <Moment date={post.createdAt} />
                    </p>
                    <ReactMarkdown
                        className="text-black dark:text-white"
                        source={post.content}
                        escapeHtml={false}
                    />
                </article>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:1337/posts");
    const posts = await res.json();

    const paths = posts.map((post) => ({ params: { id: post._id } }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const resp = await fetch(`http://localhost:1337/posts/${params.id}`);
    const post = await resp.json();

    return {
        props: { post },
    };
}
