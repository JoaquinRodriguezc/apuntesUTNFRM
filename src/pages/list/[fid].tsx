import React, { useState } from 'react';
import GoogleDriveSearch from "../../components/googleDrive/GoogleDriveSearch";
import PlayBookFolders from "../../components/common/PlayBookFolders";
import PlayBookFiles from "../../components/common/PlayBookFiles";
import FolderName from "../../components/common/FolderName";

export default function Drilldown({ toggleSearch }: { toggleSearch: boolean }) {
  const [changeMenu, setChangeMenu] = useState(false);

  function name() {
    setChangeMenu(!changeMenu);
    console.log(changeMenu);
  }

  return (
    <div>
      {changeMenu ? (
        <div className="flex justify-center items-center flex-col h-min w-full">
          <main className="h-min gap-8">
            <GoogleDriveSearch />
            <FolderName />
            <PlayBookFolders />
            <PlayBookFiles />
            <button onClick={name}>click</button>
          </main>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col h-min w-full">
          <main className="w-screen px-10 h-min flex flex-row justify-center gap-8">
            <GoogleDriveSearch />
            <div className="flex flex-col justify-center items-center">
              <FolderName />
              <PlayBookFolders />
              <PlayBookFiles />
              <button onClick={name} className="bg-red-600 h-full">
                click
              </button>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
