import Image from "next/image";

export default async function Home() {

  const data = await fetch('https://bible-api.com/data/web/random')
  const random = await data.json()

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 md:pb-28 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <p className="text-indigo-400 font-mono text-lg sm:text-1xl mb-3 tracking-wide">Welcome to</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight mb-4">
                  The Bible App
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400 tracking-tight mb-6">
                  {random.random_verse.book} {random.random_verse.chapter}:{random.random_verse.verse}
              </h2>
              <p className="text-slate-400 text-base sm:text-1xl md:text-2xl mb-10">
                  {random.random_verse.text}
              </p>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-indigo-500 text-base font-medium rounded-md text-indigo-400 bg-transparent hover:bg-indigo-500/10 transition-colors duration-200">
                  Books in English
              </a>
        </div>
    </section>
  );
}
