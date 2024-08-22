import React, { useEffect, useState, useRef } from 'react';
import GoogleDriveSearch from '../../components/googleDrive/GoogleDriveSearch';
import PlayBookFolders from '../../components/common/PlayBookFolders';
import PlayBookFiles from '../../components/common/PlayBookFiles';
import FolderName from '../../components/common/FolderName';

export default function Drilldown() {
  const [inSearch, setInSearch] = useState(false);
  const driveSearch = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.height > 100) {
          setInSearch(true);
        } else {
          setInSearch(false);
        }
      }
    });

    if (driveSearch.current) {
      resizeObserver.observe(driveSearch.current);
    }
  }, []);

  return (
    <div>
      {inSearch ? (
      <div className="flex justify-center items-center w-full flex-row">
      <main className="flex flex-row gap-5">
        <div ref={driveSearch}>
          <GoogleDriveSearch />
        </div>
        <div className="flex flex-col gap-5">
          <FolderName />
          <PlayBookFolders />
          <PlayBookFiles />
        </div>
      </main>
    </div>
    ) : (
      <div className="flex justify-center items-center w-full flex-col">
      <main className="flex flex-col gap-5">
        <div ref={driveSearch}>
          <GoogleDriveSearch />
        </div>
        <div className="flex flex-col gap-5">
          <FolderName />
          <PlayBookFolders />
          <PlayBookFiles />
        </div>
      </main>
    </div>
    )}
    </div>
  );
}
