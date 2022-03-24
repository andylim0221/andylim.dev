import Head from 'next/head'

export default function SEO(props) {
    const {children, ...metadata} = props;
    const meta = {
        name: "andylim.dev",
        title: "Andy Lim - Developer Portfolio",
        description: "I am a self-taught developer from Malaysia, proficient in cloud and DevOps.",
        image: "https://d3fdk6ilfp4n6v.cloudfront.net/public/header.png",
        ...metadata
    }
    

    return(
        <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LimChinHuat10" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="article:author" content="https://www.linkedin.com/in/limchinhuat0221/" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
        </div>
    )
}