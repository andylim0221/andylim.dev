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
            I am working as a senior software developer in a Singapore startup. I designed, developed and deployed transport management system and waste management system mainly used in Singapore. Tech stacks involved are <b>React</b>, <b>TypeScript</b>, <b>Next.js</b>, <b>Nest.js</b>, <b>Docker</b>, <b>Bitbucket pipeline</b>, and <b>Google Cloud Platform</b>.
          </p>
          <p className="text-justify text-gray-600 dark:text-gray-400">
            I am also working as a freelance AWS DevOps Engineer on <a className="font-bold text-green-500" href="https://www.upwork.com/freelancers/~0141e107cb94191eb5">Upwork</a>, providing services on provisioning, optimizing and developing infrastructures and resources in cloud.
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
