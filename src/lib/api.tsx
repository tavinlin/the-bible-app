
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

interface Chapter{
    book_id: string;
    book: string;
    chapter: string;
    url: string;
}

interface Verse{
    book_id: string;
    book: string;
    chapter: number;
    verse: number;
    text: string;
}

interface Translation{
    identifier: string;
    name: string;
    language: string;
    language_code: string;
    license: string;
}

interface Bible{
    translation: Translation;
    books: Books[];
}

interface Chapters{
    translation: Translation;
    chapters: Chapter[];
}

interface Verses{
    translation: Translation;
    verses: Verse[];
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

export async function getListofChapters(bookId: string): Promise<Chapters>{
    const res = await fetch('https://bible-api.com/data/web/' + bookId);

    if(!res.ok) throw new Error('There is no such book!');

    return res.json();
}

export async function getListofVerses(bookId: string, chapterId: string): Promise<Verses>{
    const res = await fetch('https://bible-api.com/data/web/' + bookId + '/' + chapterId);

    if(!res.ok) throw new Error('There is no such chapter!');

    return res.json();
}