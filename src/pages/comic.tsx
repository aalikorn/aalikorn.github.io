import React from "react";
import Layout from "../components/Layout";
import ComicPage from "../components/ComicPage";

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

interface ComicProps {
    comic: Comic | null;
}

const Comic: React.FC<ComicProps> = ({ comic }) => {
    return (
        <Layout>
            <ComicPage comic={comic} />
        </Layout>
    );
};

export const getServerSideProps = async () => {
    try {
        const email = "da.nikolaeva@innopolis.university";
        const hw2Url = new URL("https://fwd.innopolis.university/api/hw2");
        hw2Url.searchParams.append('email', email);
        const id = await (await fetch(hw2Url)).text();

        const comicUrl = new URL("https://fwd.innopolis.university/api/comic");
        comicUrl.searchParams.append('id', id);
        const comicData = await (await fetch(comicUrl)).json();

        return {
            props: {
                comic: comicData
            }
        };
    } catch (error) {
        console.error("Error fetching comic:", error);
        return {
            props: {
                comic: null
            }
        };
    }
};

export default Comic;