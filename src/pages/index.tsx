import React from "react";
import GoogleDriveSearch from "../components/googleDrive/GoogleDriveSearch";
import PlayBookFolders from "../components/common/PlayBookFolders";
import SimpleSignOn from "../components/googleDrive/singon";
import UploadFileButton from "../components/common/UploadFileButton";


export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-min w-full">
      <main className="h-min gap-8">
        <GoogleDriveSearch />
        <PlayBookFolders />
        <SimpleSignOn />
        <UploadFileButton />
      </main>
    </div>
  );
}
