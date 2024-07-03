import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import DisplayComic from './components/DisplayComic';

interface Comic {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
}

const App: React.FC = () => {
    const [comic, setComic] = useState<Comic | null>(null);

    useEffect(() => {
        const fetchComic = async () => {
            const email = "da.nikolaeva@innopolis.university";
            const url = new URL("https://fwd.innopolis.university/api/hw2");
            url.searchParams.append('email', email);
            const id = await (await fetch(url)).text();

            const comicUrl = new URL("https://fwd.innopolis.university/api/comic");
            comicUrl.searchParams.append('id', id);
            const comicData = await (await fetch(comicUrl)).json();

            setComic(comicData);
        };

        fetchComic();
    }, []);

    return comic ? <DisplayComic comic={comic} /> : <div>Loading...</div>;
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
