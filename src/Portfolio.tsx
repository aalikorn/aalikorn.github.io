import React from 'react';
import Name from './components/Name';
import About from './components/About'; 
import Links from './components/Links';
import Photo from './components/Photo';
import Education from './components/Education';
import Work from './components/Work';
import ComicLink from './components/ComicLink';


const Portfolio: React.FC = () => {
    return (
        <>
            <Name />
            <div className="container">
                <About />
                <table style={{margin: '20px'}}>
                    <tr>
                        <td style={{display: 'inline-block'}}>
                            <Links />
                        </td>
                        <td >
                            <Photo />
                        </td>
                    </tr>
                </table>
            </div>
                
            <Education />
            <Work />
            <ComicLink />
        </>
    );
}

export default Portfolio;