import React, { useState } from "react";
import GoogleDriveSearch from "../components/googleDrive/GoogleDriveSearch";
import PlayBookFolders from "../components/common/PlayBookFolders";

export default function Home() {
  return (
    <div className="flex items-center flex-col h-min w-full gap-8">
      <main className="h-min">
        <GoogleDriveSearch />
        <PlayBookFolders />
      </main>
    </div>
  );
}
