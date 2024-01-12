import Layout from '../components/Layout'

export default function ErrorPage() {
    return (
        <Layout title={"Error Page"}>
            <div className="md:min-h-screen text-black dark:text-white">
                {"No page found"}
            </div>
        </Layout>
    )
}