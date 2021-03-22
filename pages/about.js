import Layout from '../components/Layout';
import ContactCard from '../components/ContactCard'
export default function About() {
  return (
    <Layout title={"About Me"}>
      <div className="h-full text-black dark:text-white px-8">
        <div className="flex flex-col justify-center items-start mx-auto max-w-2xl space-y-6 mb-16">
          <p className="font-bold text-4xl md:text-6xl tracking-tight mb-4 text-black dark:text-white">
            About Me
        </p>
          <p className="text-gray-600 dark:text-gray-400">
            I'm Andy. I work as a cloud developer at National Instruments in
            Malaysia. I'm interested in full-stack development, DevOps and Cloud
            Computing. I'm learning Golang, security, system design pattern and
            microservice.
        </p>
          <p className="font-bold text-3xl tracking-light">Background</p>
          <p className="text-gray-600 dark:text-gray-400">
            I'm graduated with Bachelor of Science in Pure Mathematics from
            Universiti Sains Malaysia. It doesn't make me a Maths genius but it
            makes me more interested in Mathematics topics, such as real analysis,
            complex analysis and abstract algebra. My minor project topic is to study the convergence of
            Binomial Option Pricing Model to Black-Scholes Model.
        </p>
          <p className="font-bold text-3xl tracking-light">Work Experience</p>
          <i className="font-bold text-xl"> Cloud developer, National Instruments </i>
          <ul className="text-gray-600 dark:text-gray-400">
         <li>Provision, automate and manage infrastructure using Infrastructure as Code tools such as AWS CloudFormation or AWS CDK.</li>
        <li>Design, develop and implement automation tasks using AWS SDK.</li>
       <li>Study, design and develop CI/CD pipeline for infrastructure code.</li>
    <li>Assist Senior Cloud Service Engineer on providing support to internal customers.</li>
    </ul>
          <i className="font-bold text-xl"> Software Development Engineer, Aglive Ltd. </i>
          <ul className="text-gray-600 dark:text-gray-400">  
            <li>Developed and deployed ERC721 smart contract up to private blockchain.</li>
            <li>Developed and deployed private Ethereum blockchain as docker containers onto AWS EC2.</li>
            <li>Developed asynchronous work queue from backend to private blokchain using RabbitMQ and NodeJS.</li>
            <li>Created React Native native module to reduce ether wallet generation computation time from 7 minutes to 3 seconds using Java and Swift.</li>
            <li>Developed WeChat mini program using WeChat proprietary language and JavaScript.</li>
          </ul>
          <p className="font-bold text-3xl tracking-light">Technologies</p>
          <i className="font-bold text-xl">Programming Language</i>
          <p className="text-gray-600 dark:text-gray-400">
            JavaScript, TypeScript, Python, Golang, C++
        </p>
          <i className="font-bold text-xl">Frontend</i>
          <p className="text-gray-600 dark:text-gray-400">
            HTML/CSS, React, React Native, Redux, React Context, NextJS, Tailwind
            CSS, SCSS
        </p>
          <i className="font-bold text-xl">Backend</i>
          <p className="text-gray-600 dark:text-gray-400">Gin, NodeJS, Flask</p>
          <i className="font-bold text-xl">Tools</i>
          <p className="text-gray-600 dark:text-gray-400">
            AWS Cloudformation, AWS CDK, Terraform, SQL, Git, Github Actions,
            Docker, Kubernetes
        </p>
        </div>
      </div>
      <ContactCard />
    </Layout>
  );
}
