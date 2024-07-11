import React from 'react';

const Links: React.FC = () => {
  return (
    <div className="links-photo">
      <ul className="links">
        <li>
          <a href="https://github.com/aalikorn">
            <img src="images/25231.png" alt="GitHub" id="gh-link" />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://t.me/aalikorn">
            <img
              src="images/telegram-minimal-logo-2F6E632BF2-seeklogo.com.png"
              alt="Telegram"
              id="tg-link"
            />
            <span>Telegram</span>
          </a>
        </li>
        <li>
          <a href="mailto:nikolaevdaaa@gmail.com">
            <img
              src="images/email_icon-icons.com_64925.png"
              alt="Email"
              id="email"
            />
            <span>Email</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
