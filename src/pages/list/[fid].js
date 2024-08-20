import React, { useState } from "react";
import GoogleDriveSearch from "../../components/googleDrive/GoogleDriveSearch";
import PlayBookFolders from "../../components/common/PlayBookFolders";
import PlayBookFiles from "../../components/common/PlayBookFiles";
import FolderName from "../../components/common/FolderName";


export default function Drilldown() {
  return (
    <div className="flex justify-center items-center flex-col h-min w-full">
      <main className="h-full gap-8">
        <GoogleDriveSearch />
        <FolderName />
        <PlayBookFolders />
        <PlayBookFiles />
      </main>
    </div>
  );
}
