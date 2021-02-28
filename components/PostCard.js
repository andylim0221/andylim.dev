import Link from "next/link";
import Moment from "react-moment";

export default function PostCard({ post }) {
    return (
        <div className="border-2 border-gray-600 dark:border-gray-400 rounded-md w-full p-8">
        <Link href={`blog/${post.id}`}>
            <a className="">
                <div className="mb-8">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="font-bold text-black dark:text-white text-2xl md:text-4xl mb-5">
                            {post.title}
                        </h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
                            <Moment date={post.createdAt} />
                        </p>
                    </div>
                    <div className="whitespace-normal text-black dark:text-white overflow-hidden overflow-ellipsis">
                        {post.description.slice(0,200)}
                    </div>
                </div>
            </a>
        </Link>
        </div>
    );
}
