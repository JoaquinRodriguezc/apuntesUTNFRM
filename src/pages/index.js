import Head from "next/head";
import React, { useState } from "react";
import HeaderImage from "../components/common/HeaderImage";
import GoogleDriveSearch from "../components/googleDrive/GoogleDriveSearch";
import PlayBookFolders from "../components/common/PlayBookFolders";
import Title from "../components/common/Title";
import Footer from "./../components/common/Footer";

export default function Home() {
  return (
    <div className="flex items-center flex-col h-screen w-full gap-8">
      <main className="">
        <GoogleDriveSearch />
        <PlayBookFolders />
      </main>
    </div>
  );
}
