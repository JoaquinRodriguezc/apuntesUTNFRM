import Head from "next/head";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import HeaderImage from "../../components/HeaderImage";
import GoogleDriveSearch from "../../components/GoogleDriveSearch";
import PlayBookFolders from "../../components/PlayBookFolders";
import PlayBookFiles from "../../components/PlayBookFiles";
import FolderName from "../../components/FolderName";

export default function Drilldown() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeaderImage />
        <h1>APUNTES UTN</h1>

        <GoogleDriveSearch />

        <FolderName />

        <PlayBookFolders />

        <PlayBookFiles />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
