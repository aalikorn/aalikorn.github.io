import React from 'react';
import DisplayComic from './DisplayComic';

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

interface ComicPageProps {
  comic: Comic | null;
}

const ComicPage: React.FC<ComicPageProps> = ({ comic }) => {
  return comic ? <DisplayComic comic={comic} /> : <div>Loading...</div>;
};

export default ComicPage;
