import { useState } from "react";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import ContactCard from "../components/ContactCard";
import Layout from "../components/Layout";
import { getAllArticles } from "../lib/api";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  const props = {
    title: "Blog",
    description: `These are the blogs I have been writing for my software development journey. In total, I have written ${posts.length} articles.`,
    search: "Search...",
    noPageFound: "No Posts Found"
  }

  const filteredPosts = posts
    .sort((a, b) => Number(Date(b.published_at)) - Number(Date(a.published_at)))
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <Layout title={props.title}>
      <div className="h-full md:min-h-screen px-5">
        <div className="flex flex-col justify-center items-start max-w-3xl mx-auto pb-16 space-y-6">
          <h1 className="font-bold text-4xl md:text-6xl tracking-tight mb-4 text-black dark:text-white">
            {props.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {props.description}
          </p>
          <input
            type="text"
            placeholder={props.search}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-gray-200 dark:bg-gray-200 text-gray-900 px-4 py-2 border-gray-500 dark:border-gray-900 focus:ring-blue-500 block w-full rounded-md mb-5"
          />
        <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
          {!filteredPosts.length && (
            <div className="h-screen text-gray-600 dark:text-gray-400 my-4">
              {props.noPageFound}
            </div>
          )}
          {currentPosts.map(
            (post) => <PostCard post={post} key={String(post.id)} />
          )}
        </div>
        <ContactCard />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const unfilteredPosts = await getAllArticles();
  const posts = unfilteredPosts.filter(post=>post.published)
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
