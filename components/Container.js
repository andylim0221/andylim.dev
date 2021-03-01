import Head from 'next/head'
import {useRouter} from 'next/router'

export default function Container(props) {
    const router = useRouter()
    const {children, ...metadata} = props;
    const meta = {
        name: "Andy Lim",
        title: "I am Andy Lim",
        description: "I am a self-taught cloud developer from Malaysia, interested in full-stack development",
        image: "happy.png",
        ...metadata
    }
    

    return(
        <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://andylim.dev${router.asPath}`} />
        <link rel="canonical" href={`https://andylim.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LimChinHuat10" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
        </div>
    )
}