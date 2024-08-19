import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import HeaderImage from "../components/googleDrive/HeaderImage";
import GoogleDriveSearch from "../components/GoogleDriveSearch";
import PlayBookFolders from "../components/PlayBookFolders";

export default function Home() {
  return (
    <div className="flex justify-center h-screen ">
      <Head>
        <title>ApuntesUTN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-2xl">APUNTES UTN</h1>
        <HeaderImage />
        <GoogleDriveSearch />
        <PlayBookFolders />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
