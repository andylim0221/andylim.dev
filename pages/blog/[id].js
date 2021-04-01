import BlogPost from "../../components/BlogPost";
import ContactCard from "../../components/ContactCard";
import Layout from "../../components/Layout";
import { getAllArticles, getArticleById } from "../../lib/api";

export default function Post({ post }) {
  const { cover_image, title, published_at, body_markdown, description } = post;

  return (
    <Layout date={published_at} title={title} description={description}>
      <div className="w-full">
        <BlogPost cover_image={cover_image} title={title} createdAt={published_at} content={body_markdown} />
        <ContactCard />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await getAllArticles();
  const paths = res.map((post) => ({
    params: { id: String(post.id) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getArticleById(params.id);

  return {
    props: { post },
    revalidate: 10
  };
}
