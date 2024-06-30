const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

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

async function fetchID(): Promise<string> {
    const email = "da.nikolaeva@innopolis.university";
    const url = new URL("https://fwd.innopolis.university/api/hw2");
    url.searchParams.append('email', email);
    const response = (await fetch(url)).text();
    return response;
}

async function getComic(id: string): Promise<Comic> {
    const url = new URL("https://fwd.innopolis.university/api/comic")
    url.searchParams.append('id', id);
    const response = (await fetch(url)).json();
    return response;
}

function displayComic(comic: Comic): void {
    const container = document.getElementById("comic-container") as HTMLElement;
    container.innerHTML = '';

    const image = document.createElement('img');
    image.src = comic.img;
    image.alt = comic.alt;
    image.id = "comic-image";

    const title = document.createElement('h2');
    title.textContent = comic.safe_title;
    title.id = "comic-title";

    const comicDate = dayjs(`${comic.year}-${comic.month}-${comic.day}`);

    const date = document.createElement('p');
    date.textContent = comicDate.format('MMMM D, YYYY');
    date.id = "comic-date";

    const fromNow = document.createElement('p');
    fromNow.textContent = comicDate.fromNow();
    fromNow.id = "comic-fromNow";

    const altText = document.createElement('p');
    altText.textContent = comic.alt;
    altText.id = "comic-alt";

    container.appendChild(title)
    container.appendChild(image);
    container.appendChild(altText);
    container.appendChild(date);
    container.appendChild(fromNow);
}

async function loadComic(): Promise<void> {
    try {
        const id = await fetchID();
        const comic = await getComic(id);
        displayComic(comic);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('comic-container')!.textContent = 'Error';
    }
}

window.onload = loadComic;