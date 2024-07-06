import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header style={{width: '100%'}}>
        <nav style={{width: '100%'}}>
          <ul id="nav-list" style={{width: '100%'}}>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
            <li>
              <Link href="/comic">Comic</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;
