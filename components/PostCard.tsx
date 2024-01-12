import Link from "next/link";
import Moment from "react-moment";

interface IPostCard {
    id: string;
    title: string;
    description: string;
    published_at: string;
}

export default function PostCard({ post }: { post: IPostCard }) {

    const {id, title, description, published_at} = post

    return (
        <div className="border-2 border-gray-600 dark:border-gray-400 rounded w-full p-8 overflow-ellipsis overflow-hidden break-word hover:shadow-xl dark:hover:bg-gray-700">
                <div className="mb-8">
                    <div className="flex flex-col justify-center items-start">
                    <Link href={`blog/${id}`} className="font-bold text-black dark:text-white text-2xl md:text-3xl mb-5 cursor-pointer">
                            {title}
                    </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
                            Published at <Moment date={published_at} format="Do MMM YYYY h:mma Z" local={true} />
                        </p>
                    </div>
                    <div className="whitespace-normal text-black dark:text-white">
                        {description}
                    </div>
                </div>
        </div>
    );
}
