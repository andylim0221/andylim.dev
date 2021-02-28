import Link from "next/link";
import Moment from "react-moment";

export default function PostCard({ content }) {
    return (
        <div className="border ">
        <Link href={`blog/${content.id}`}>
            <a className="w-full">
                <div className="mb-8 w-full">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="font-bold text-black dark:text-white text-4xl mb-5">
                            {content.title}
                        </h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
                            <Moment date={content.createdAt} />
                        </p>
                    </div>
                    <div className="whitespace-normal text-gray-600 dark:text-gray-400 overflow-hidden overflow-ellipsis">
                        {content.content.slice(0, 100)}
                    </div>
                </div>
            </a>
        </Link>
        </div>
    );
}
