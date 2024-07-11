import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="author" content="Daria Nikolaeva" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header style={{ width: '100%' }}>
        <nav style={{ width: '100%' }}>
          <ul id="nav-list" style={{ width: '100%' }}>
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
