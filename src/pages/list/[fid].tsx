import React, { useEffect, useState, useRef } from "react";
import GoogleDriveSearch from "../../components/googleDrive/GoogleDriveSearch";
import { drive_v3 } from "googleapis";
import PlayBookFoldersContainer from "../../components/containers/PlayBooksFoldersContainer";
import { useRouter } from "next/router";
import PlayBookFilesContainer from "../../components/containers/PlayBookFilesContainer";
import FolderNameContainer from "../../components/containers/FolderNameContainer";

export default function Drilldown() {
  const [inSearch, setInSearch] = useState(false);
  const [results, setResults] = useState<drive_v3.Schema$File[] | []>([]);
  const router = useRouter();
  const isRootFolder =
    router.query.fid === process.env.NEXT_PUBLIC_TARGET_FOLDER;
  return (
    <div className="flex justify-center items-center w-full flex-col">
      <main className="flex flex-col gap-5">
        <div className="relative">
          <GoogleDriveSearch setResults={setResults} />
        </div>

        {results.length === 0 ? (
          <div className="flex flex-col gap-5 items-center">
            {!isRootFolder && <FolderNameContainer />}
            <PlayBookFoldersContainer />
            <PlayBookFilesContainer />
          </div>
        ) : (
          <PlayBookFilesContainer files={results} />
        )}
      </main>
    </div>
  );
}
