async function fetchID() {
    const email = "da.nikolaeva@innopolis.university";
    const url = new URL("https://fwd.innopolis.university/api/hw2");
    url.searchParams.append('email', email);
    const response = (await fetch(url)).text();
    return response;
}

async function getComic(id) {
    const url = new URL("https://fwd.innopolis.university/api/comic")
    url.searchParams.append('id', id);
    const response = (await fetch(url)).json();
    return response;
}

function displayComic(comic) {
    const container = document.getElementById("comic-container");
    container.innerHTML = '';
    const image = document.createElement('img');
    image.src = comic.img;
    image.alt = comic.alt;
    image.id = "comic-image";

    const title = document.createElement('h2');
    title.textContent = comic.safe_title;
    title.id = "comic-title";

    const date = document.createElement('p');
    date.textContent = new Date(comic.year, comic.month - 1, comic.day).toLocaleDateString();
    date.id = "comic-id";

    const altText = document.createElement('p');
    altText.textContent = comic.alt;
    altText.id = "comic-alt";

    container.appendChild(title)
    container.appendChild(image);
    container.appendChild(altText);
    container.appendChild(date);
}

async function loadComic() {
    try {
        const id = await fetchID();
        const comic = await getComic(id);
        displayComic(comic);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('comic-container').textContent = 'Error';
    }
}

window.onload = loadComic;