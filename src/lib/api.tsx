
interface RandomVerse{
    translation: {
        identifier: string;
        name: string;
        language: string;
        language_code: string;
        license: string;
    }
    random_verse: {
        book_id: string;
        book: string;
        chapter: number;
        verse: number;
        text: string;
    }
}

interface Books{
    id: number;
    name: string;
    url: string;
}

interface Bible{
    translation: {
        identifier: string;
        name: string;
        language: string;
        language_code: string;
        license: string;
    }
    books: Books[]
}

export async function getRandomVerse(): Promise<RandomVerse>{
    const res = await fetch('https://bible-api.com/data/web/random', {
        cache: 'no-store'
    });

    return res.json();
}

export async function getListOfBooks(): Promise<Bible>{
    const res = await fetch('https://bible-api.com/data/web');

    return res.json();
}