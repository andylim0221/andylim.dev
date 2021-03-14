import { useState } from "react";
import PostCard from "../components/PostCard";
import ContactCard from "../components/ContactCard";
import Layout from "../components/Layout";
import {getAllArticles} from "../lib/api"
export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredPosts = posts
    .sort((a, b) => Number(Date(b.published_at)) - Number(Date(a.published_at)))
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Layout title={"Blog"}>
    <div className="h-full md:min-h-screen px-8">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16 space-y-6">
        <h1 className="font-bold text-4xl md:text-6xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`These are the blogs I have been writing for my software development journey. In total, I have written ${posts.length} articles.`}
        </p>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-gray-200 dark:bg-gray-200 text-gray-900 px-4 py-2 border-gray-500 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md mb-5"
        />
        {!filteredPosts.length && (
          <div className="h-screen text-gray-600 dark:text-gray-400 my-4">
            No posts found
          </div>
        )}
        {filteredPosts.map((post) => (
          post.published && <PostCard post={post} />
        ))}
      </div>
      <ContactCard />
    </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllArticles();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
