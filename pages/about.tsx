import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";
import { RESUME_URL } from "../lib/api";

export default function About() {
  return (
    <Layout title={"About Me"}>
      <div className="h-full text-black dark:text-white px-5">
        <div className="flex flex-col justify-center items-center mx-auto max-w-3xl space-y-6 mb-16">
          <p className="font-bold text-4xl md:text-6xl tracking-tight mb-4 text-black dark:text-white">
            About Me
          </p>
          <p className="text-justify text-gray-600 dark:text-gray-400">
            I am an Engineer
          </p>
          <button
            className="bg-white dark:bg-gray-500 dark:hover:bg-gray-700 dark:text-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-black dark:border-white rounded shadow cursor-pointer"
            onClick={ () => {
              window.open(
                `${RESUME_URL ?? 'https://d3fdk6ilfp4n6v.cloudfront.net/public/LimChinHuat_Resume.pdf'}`, 
                '_blank', 
                'noopener'
              )
            }}
            >
              Download Resume
          </button>
        </div>
      </div>
      <ContactCard />
    </Layout>
  );
}
