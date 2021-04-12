import {useRouter} from 'next/router'
import BlogPost from "../../components/BlogPost";
import ContactCard from "../../components/ContactCard";
import Layout from "../../components/Layout";
import { getAllArticles, getArticleById } from "../../lib/api";

export default function Post({ post }) {
  const router = useRouter()
  
  if(router.isFallback) {
    return (
      <div>
      Loading ...
      </div>
    )
  }

  const {title, published_at, body_markdown, description, cover_image } = post;

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
  const posts = res.filter(post=>post.published)

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = await getArticleById(params.id);

  return {
    props: { post },
    revalidate: 10
  };
}
