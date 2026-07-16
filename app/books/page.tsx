import Image from "next/image";
import { getListOfBooks } from "@/src/lib/api";

export default async function Page() {
    
    const res = await getListOfBooks();

    return (
        <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight mb-4">Here are the books</h1>
            <ul className="text-slate-100">
                {res.books.map((book) => (
                    // It is required to add a key to the <li> element
                    <li key={book.id}>{book.name}</li>
                ))}
            </ul>
        </div>
    );
}