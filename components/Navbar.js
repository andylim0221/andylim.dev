import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme("");
    
    useEffect(() => setMounted(true), []);

    return (
            <div className="sticky top-0 bg-white z-50 border-b dark:bg-gray-900">
            <nav className="flex justify-between md:justify-between items-center text-xl w-full mx-auto py-4 max-w-screen-2xl px-8">
                <div>
                    <Link href="/">
                        <a className="hover:underline p-2 sm:p-4 text-gray-900 dark:text-gray-100 ">Andy</a>
                    </Link>
                </div>
                <div className="flex items-center justify-center"> 
                    <Link href="/about">
                        <a className="hover:underline p-2 sm:p-4 text-gray-900 dark:text-gray-100">About</a>
                    </Link>
                    <Link href="/blog">
                        <a className="hover:underline p-2 sm:p-4 text-gray-900 dark:text-gray-100 ">Blog</a>
                    </Link>
                    
                    <button
                        type="button"
                        className="bg-gray-300 dark:bg-gray-500 rounded p-3 h-10 w-10"
                        aria-label="set-theme"
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                    >
                        {mounted && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                className="h-4 w-4 text-gray-800 dark:text-gray-200"
                            >
                                {theme === "dark" ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                )}
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
            </div>
    );
}
