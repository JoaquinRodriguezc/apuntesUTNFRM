import React, { useState, useEffect } from "react";
import Image from "next/image";
import Document from "../../../public/document.png";
import { drive_v3 } from "googleapis";
type PlayBookFilesProps = {
  files: drive_v3.Schema$File[] | undefined;
};
export default function PlayBookFiles({ files }: PlayBookFilesProps) {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <ul className="w-full flex flex-col gap-5">
        {files &&
          files.map((result) => (
            <li
              key={result.id}
              className="p-5 h-10 flex flex-row rounded-md bg-500 hover:bg-700 duration-500 font-semibold text-lg"
            >
              <a
                href={`https://docs.google.com/document/d/${result.id}/edit`}
                data-file-id={result.id}
                target="_blank"
                rel="noopener noreferrer"
                data-mime-type={result.mimeType}
                //  onClick={handleGoogleDriveShortcutLink}
                className="flex flex-row items-center gap-2"
              >
                <Image
                  src={Document}
                  alt="Picture of the author"
                  className="h-5 w-6"
                />
                {result.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
