import React from 'react';
import Link from 'next/link';

const ComicLink: React.FC = () => {
    return (
        <div id="comic-link-div">
            <Link href="/comic">
                <a id="comic-link">Click here to view the funny comic</a>
            </Link>
        </div>
    );
};

export default ComicLink;
