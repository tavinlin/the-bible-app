'use client'

import { useRouter } from "next/navigation";

export default function SearchForm(){

    const router = useRouter();

    function getSearchInput(formData: FormData){

        const query = formData.get('query')?.toString().trim();

        if(query){
            router.push(`/search?query=${encodeURIComponent(query)}`);
        }
    }
    
    return(
        <div>
            <form action={getSearchInput} className="w-full">
                <label htmlFor="searchInput" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>

                    <input
                        type="search"
                        name="query"
                        placeholder="Search..."
                        required
                        className="block w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-24 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400" />

                    <button
                        type="submit"
                        className="absolute bottom-1.5 right-1.5 top-1.5 rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    >
                        Search
                    </button>
                </div>
            </form>
            <p id="search-example" className="top-full text-xs text-slate-500">
                Example: single verse "john 3:16", abbreviated "jn 3:16", range "john 3:16-4:4", no space between "john3:16"
            </p>
        </div>
    );
}