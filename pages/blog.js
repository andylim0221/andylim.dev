import { useState } from "react";
import PostCard from "../components/PostCard";

export default function Blog({ posts }) {
    const [searchValue, setSearchValue] = useState("");
    const filteredPosts = posts
        .sort(
            (a, b) =>
                Number(Date(b.published_at)) - Number(Date(a.published_at))
        )
        .filter((post) =>
            post.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    return (
        <div className="h-full md:min-h-screen bg-white dark:bg-black">
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 space-y-4">
                <h1 className="font-bold text-3xl md:text-6xl tracking-tight mb-4 text-black dark:text-white">
                    Blog
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {`These are the blogs I have been writing for my software development journey. In total, I have written ${posts.length} articles and yes, I love Lee Robinson's site!`}
                </p>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 border-gray-500 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md mb-5"
                />
                {!filteredPosts.length && (
                    <p className="text-gray-600 dark:text-gray-400 my-4">
                        No posts found
                    </p>
                )}
                {filteredPosts.map((post) => (
                    <PostCard content={post} />
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:1337/posts`);
    const posts = await res.json();
    return {
        props: {
            posts,
        },
        revalidate: 10,
    };
}
