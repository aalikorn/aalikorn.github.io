import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="about">
      <ul>
        <li>Python Developer</li>
        <li>
          Innopolis, Russia. Local time:{' '}
          <time id="currentTime">{formattedTime}</time>
        </li>
        <li>19 y.o.</li>
        <li>English, Russian</li>
      </ul>
    </div>
  );
};

export default About;
