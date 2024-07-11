import React from 'react';

const Work: React.FC = () => {
  return (
    <div id="workblock">
      <p className="title">Work experience</p>
      <table id="work">
        <tr>
          <td className="years">
            <p>Mar. 2024</p>
          </td>
          <td>
            <p className="worktitle">Innopolis University.</p>
            <p>
              Development of a telegram bot with quizzes and advertising
              information. Participation with this bot at the VDNH exhibition,
              Moscow, Russia.
            </p>
          </td>
        </tr>
        <tr>
          <td className="years">
            <p>Since oct. 2023</p>
          </td>
          <td>
            <p className="worktitle">Innopolis University.</p>
            <p>
              Teacher at the courses &quot;Python beginners&quot;, &quot;Python
              continuing&quot;, &quot;Development of a telegram bots on
              Python&quot;
            </p>
          </td>
        </tr>
        <tr>
          <td className="years">
            <p>Sep. 2023 - May 2024</p>
          </td>
          <td>
            <p className="worktitle">100points school.</p>
            <p>
              Tutor of computer science courses in preparation for the state
              exam
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Work;
