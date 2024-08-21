import React from "react";
import GoogleDriveSearch from "../components/googleDrive/GoogleDriveSearch";
import PlayBookFolders from "../components/common/PlayBookFolders";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-min w-full">
      <main className="h-min gap-8">
        <GoogleDriveSearch />
        <PlayBookFolders />
      </main>
    </div>
  );
}
