import Head from "next/head";
import React, { useState } from "react";
import HeaderImage from "../../components/common/HeaderImage";
import GoogleDriveSearch from "../../components/googleDrive/GoogleDriveSearch";
import PlayBookFolders from "../../components/common/PlayBookFolders";
import PlayBookFiles from "../../components/common/PlayBookFiles";
import FolderName from "../../components/common/FolderName";
import Footer from "../../components/common/Footer";
import Title from "../../components/common/Title";

export default function Drilldown() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <Head>
        <title>ApuntesUTN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full gap-8">
        <HeaderImage />
        <Title page="list" />
        <GoogleDriveSearch />
        <FolderName />
        <PlayBookFolders />
        <PlayBookFiles />
      </main>

      <Footer />
    </div>
  );
}
