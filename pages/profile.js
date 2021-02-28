export default function Profile() {
    return (
        <div className="h-full bg-white dark:bg-black text-black dark:text-white px-8">
            <div className="flex flex-col justify-center items-start mx-auto max-w-2xl space-y-6 mb-16">
                <p className="font-bold text-5xl md:text-6xl tracking-tight mb-4 text-black dark:text-white">About Me</p>
                <p className="text-gray-600 dark:text-gray-400">
                    I'm Andy. I work as a cloud developer at National
                    Instruments in Malaysia.
                    I'm interested in full-stack development, DevOps and Cloud Computing.
                    I'm learning Golang, security, system design pattern and microservice.
                </p>
                <p className="font-bold text-3xl tracking-light">Background</p>
                <p className="text-gray-600 dark:text-gray-400">
                    I'm graduated from Bachelor of Science in Pure Mathematics
                    from Universiti Sains Malaysia. It doesn't make me a Maths
                    genius but make me more interested in Mathematics topics,
                    such as real analysis, comllex analysis. My minor project
                    topic is the convergence of Binomial Option Pricing Model to
                    Black-Scholes Model.
                </p>
                <p className="font-bold text-3xl tracking-light">
                    Work Experience
                </p>
                <p> Cloud developer, National Instruments </p>
                <p> Software Development Engineer, Aglive Ltd. </p>
                <p className="font-bold text-3xl tracking-light">
                    Technologies
                </p>
                <i className="font-bold text-xl">Programming Language</i>
                <p className="text-gray-600 dark:text-gray-400">JavaScript, TypeScript, Python, Golang, C++</p>
                <i className="font-bold text-xl">Frontend</i>
                <p className="text-gray-600 dark:text-gray-400">
                    HTML/CSS, React, React Native, Redux, React Context, NextJS,
                    Tailwind CSS, SCSS
                </p>
                <i className="font-bold text-xl">Backend</i>
                <p className="text-gray-600 dark:text-gray-400">Gin, NodeJS, Flask</p>
                <i className="font-bold text-xl">Tools</i>
                <p className="text-gray-600 dark:text-gray-400">
                    AWS Cloudformation, AWS CDK, Terraform, SQL, Git, Github
                    Actions, Docker, Kubernetes
                </p>
            </div>
        </div>
    );
}
