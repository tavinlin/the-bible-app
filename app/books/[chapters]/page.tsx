import Image from "next/image";
import Link from "next/link";
import { getListofChapters } from "@/src/lib/api";

export default async function Page({
    params,
}: {
    params: Promise<{chapters: string}>
}) {

    const {chapters} = await params;
    const res = await getListofChapters(chapters);

    return (
        <div className="">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight mb-6">Book of {res.chapters[0].book}</h1>
            <ul className="text-slate-100">
                {res.chapters.map((chapter) => (
                    // It is required to add a key to the <li> element
                    <li key={chapter.chapter}>
                        <Link 
                            href={'/books/' + chapter.book_id + '/' + chapter.chapter} 
                            className="inline-flex items-center justify-center w-full py-5 border border-indigo-500 text-base font-medium rounded-md text-slate-200 bg-transparent hover:bg-indigo-500/10 transition-colors duration-200 mb-6"
                        >
                            Chapter {chapter.chapter}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}