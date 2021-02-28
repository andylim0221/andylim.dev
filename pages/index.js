import Head from "next/head";
import styles from "../styles/Home.module.css";
import SocialMediaIcon from "../components/SocialMediaIcon";

export default function Home() {
    return (
        <div className="h-full bg-white dark:bg-black overscroll-none">
            <div className="h-screen flex flex-col items-center items-start">
                <div>
                <p className="text-9xl font-extrabold text-center tracking-wider text-black dark:text-white mb-5 mt-40">
                    I'm Andy
                </p>
                <p className="text-xl text-center text-black dark:text-white ">
                    Self-taught developer from Malaysia
                </p>
                </div>
            <div className="flex justify-center items-center">
                <SocialMediaIcon
                    link="limchinhuat0221@gmail.com"
                    icon="mail"
                />
                <SocialMediaIcon
                    link="https://www.linkedin.com/in/limchinhuat0221/"
                    icon="linkedin"
                />
                <SocialMediaIcon
                    link="https://github.com/andylim0221"
                    icon="github"
                />
                <SocialMediaIcon
                    link="https://www.facebook.com/andy.lim.18659041/"
                    icon="facebook"
                />
            </div>
            </div>
        </div>
    );
}
