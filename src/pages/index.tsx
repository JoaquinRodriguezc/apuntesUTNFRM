import Head from "next/head";
import React from "react";
import GoogleDriveSearch from "../components/googleDrive/GoogleDriveSearch";
import PlayBookFolders from "../components/common/PlayBookFolders";
import Footer from "../components/common/Footer";
import SimpleSignOn from "../components/googleDrive/singon";
import UploadFileButton from "../components/common/UploadFileButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <Head>
        <title>ApuntesUTN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full gap-8">
        <GoogleDriveSearch />
        <PlayBookFolders />
        <SimpleSignOn />
        <UploadFileButton />
      </main>
    </div>
  );
}
