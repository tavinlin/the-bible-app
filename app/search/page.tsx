import { getSearchResult } from "@/src/lib/api";

interface SearchPageProp{
    searchParams: Promise<{ query?: string | string[] }>;
}


export default async function Page({searchParams}: SearchPageProp){

    const resolvedParams = await searchParams;

    const rawQuery = resolvedParams.query;
    const queryParam: string = Array.isArray(rawQuery) ? rawQuery[0] : (rawQuery ?? '');

    const res = await getSearchResult(queryParam);

    return(
        <div>
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight mb-6">
                    {res.error}
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight mb-6">
                    {res.reference}
                </h1>
            </div>
            <p className="text-slate-200 text-lg sm:text-2xl">
                {res.text}
            </p>
        </div>
    );
}