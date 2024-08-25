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
    <div className="flex  m-auto items-center w-[90%] lg:w-1/2 justify-center flex-col">
      <GoogleDriveSearch setResults={setResults} />
      <PlayBookFoldersContainer />
      <PlayBookFilesContainer />
    </div>
  );
}
