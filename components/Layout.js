import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
function Layout({ children }) {
  return (
    <>
          <Head>
            <title>Slowdough App</title>
            <meta name="keywords" content="slowdough e-shop"></meta>
          </Head>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout
