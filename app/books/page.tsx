import Image from "next/image";
import Link from "next/link";
import { getListOfBooks } from "@/src/lib/api";

export default async function Page() {
    
    const res = await getListOfBooks();

    return (
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight mb-6">{res.translation.name}</h1>
            <ul className="text-slate-100">
                {res.books.map((book) => (
                    // It is required to add a key to the <li> element
                    <li key={book.id}>
                        <Link 
                            href={'/books/' + book.id}
                            className="inline-flex items-center justify-center w-full py-5 border border-indigo-500 text-base font-medium rounded-md text-slate-200 bg-transparent hover:bg-indigo-500/10 transition-colors duration-200 mb-6"
                        >
                            {book.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}