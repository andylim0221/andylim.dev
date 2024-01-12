import {useRouter} from 'next/router'
import {GetStaticPaths, GetStaticProps} from 'next';
import BlogPost from "../../components/BlogPost";
import ContactCard from "../../components/ContactCard";
import Layout from "../../components/Layout";
import { getAllArticles, getArticleById } from "../../lib/api";
import { UserArticlesType, ArticleType } from "../../types";
import { ParsedUrlQuery } from 'querystring';


export default function Post({ post }: { post: ArticleType}) {
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

interface StaticParams extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths = (async () => {
  const res: UserArticlesType[] = await getAllArticles();
  const posts = res.filter(post=>post.published)

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { id } = context.params as StaticParams;
  
  const post = await getArticleById(id);
  
  return {
    props: { post },
    revalidate: 10
  };
}) satisfies GetStaticProps;