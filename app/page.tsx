import Image from "next/image";
import { getRandomVerse} from "@/src/lib/api";
import SearchForm from "../app/_components/SearchForm"

export default async function Home() {

  const res = await getRandomVerse();

  return (
    <div>
        <div className="flex justify-center">
            <Image
                src="/bible.png"
                alt="Bible Image"
                className="mb-10"
                width={250}
                height={250}
                priority
            />
        </div>
        <div className="text-center">
            <p className="text-indigo-400 font-mono text-lg sm:text-1xl mb-3 tracking-wide">Welcome to</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight mb-4">
                The Bible App
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400 tracking-tight mb-6">
                {res.random_verse.book} {res.random_verse.chapter}:{res.random_verse.verse}
            </h2>
            <p className="text-slate-400 text-base sm:text-1xl md:text-2xl mb-10">
                {res.random_verse.text}
            </p>
        </div>

        <SearchForm/>

        <hr className="border-slate-800 max-w-5xl mx-auto my-10"></hr>

        <div className="text-center">
            <a href="/books" className="inline-flex items-center justify-center px-6 py-3 border border-indigo-500 text-base font-medium rounded-md text-indigo-400 bg-transparent hover:bg-indigo-500/10 transition-colors duration-200">
                World English Bible
            </a>
        </div>
    </div>
  );
}