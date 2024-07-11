import React from 'react';
import Name from './Name';
import About from './About';
import Links from './Links';
import Photo from './Photo';
import Education from './Education';
import Work from './Work';
import ComicLink from './ComicLink';

const Portfolio: React.FC = () => {
  return (
    <>
      <Name />
      <div className="container">
        <About />
        <table style={{ margin: '20px' }}>
          <tr>
            <td style={{ display: 'inline-block' }}>
              <Links />
            </td>
            <td>
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
};

export default Portfolio;
