interface IPagination {
  postsPerPage: number;
  totalPosts: number;
  paginate: number;
  currentPage: number;
}

export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage }: IPagination) {
  const pageNumbers = [];
  const limit = Math.ceil(totalPosts / postsPerPage)
  for (let i = 1; i <= limit; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
    {/* <button onClick={()=>paginate(currentPage-1)} className={"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300  text-sm font-medium focus:outline-none cursor-pointer text-black" + (currentPage<=1?"bg-black":"bg-white dark:bg-gray-400  dark:text-white")} disabled={currentPage<=1?true:false}>
        <span className="sr-only">Previous</span>
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
    </button> */}
      {pageNumbers.map((number) => (
        <button key={number}
        onClick={()=>paginate(number)}
          className={"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-black dark:text-white cursor-pointer focus:outline-none" + (currentPage === number? " bg-gray-100 dark:bg-gray-600":"bg-white dark:bg-gray-400") }
        >
          {number}
        </button>
        ))}
        {/* <button onClick={()=>paginate(currentPage+1)} className={"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300  text-sm font-medium focus:outline-none cursor-pointer text-black" + (currentPage===limit?"bg-black":"bg-white dark:bg-gray-400 dark:text-white")} disabled={currentPage===limit?true:false}>
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </button> */}
    </nav>
  );
}
