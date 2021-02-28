import Post from "../../components/Post";
export default function BlogPost({ post }) {
  const { title, createdAt, content } = post;
  return <Post title={title} createdAt={createdAt} content={content} />;
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
