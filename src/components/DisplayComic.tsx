import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

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

interface DisplayComicProps {
  comic: Comic;
}

const DisplayComic: React.FC<DisplayComicProps> = ({ comic }) => {
  const comicDate = dayjs(`${comic.year}-${comic.month}-${comic.day}`);
  const unusedVariable = 10;

  return (
    <div id="comic-container">
      <h2 id="comic-title">{comic.safe_title}</h2>
      <img src={comic.img} alt={comic.alt} id="comic-image" />
      <p id="comic-date">{comicDate.format('MMMM D, YYYY')}</p>
      <p id="comic-fromNow">{`Released ${comicDate.fromNow()}`}</p>
      <p id="comic-alt">{comic.alt}</p>
    </div>
  );
};

export default DisplayComic;
