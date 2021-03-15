import ContactCard from "../components/ContactCard";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout title={"Andy Lim - Developer"}>
    <div className="h-screen md:min-h-screen overscroll-none">
      <div className="flex flex-col items-center">
        <div className="fixed">
          <p className="text-7xl md:text-9xl font-extrabold text-center tracking-lg text-black dark:text-white mb-5 mt-20 md:mt-40">
            I'm Andy
          </p>
          <p className="text-xl text-center text-black dark:text-white">
            Self-taught developer from Malaysia
          </p>
        <ContactCard />
        </div>
      </div>
    </div>
    </Layout>
  );
}
