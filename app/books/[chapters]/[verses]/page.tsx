import Image from "next/image";
import Link from "next/link";
import { getListofVerses } from "@/src/lib/api";

export default async function Page({
    params,
}: {
    params: Promise<{chapters: string, verses: string}>
}) {

    const {chapters, verses} = await params;
    const res = await getListofVerses(chapters, verses);

    return (
        <div>
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-slate-200 tracking-tight mb-6">{res.verses[0].book}: Chapter {res.verses[0].chapter}</h1>
            {res.verses.map((verse) => (
                <div key={verse.verse} className="text-slate-200 text-lg sm:text-2xl">
                    <p className="indent-4"><span className="text-indigo-300">{verse.verse}</span> {verse.text}</p>
                </div>
            ))}
        </div>
    );
}