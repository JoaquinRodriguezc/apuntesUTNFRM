import React, { useState, useEffect } from "react";
import Image from "next/image";
import { drive_v3 } from "googleapis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFilePdf,
  faImage,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
type PlayBookFilesProps = {
  files: drive_v3.Schema$File[] | undefined;
};
export default function PlayBookFiles({ files }: PlayBookFilesProps) {
  function getIconByMime(mime: string): IconDefinition {
    if (mime === "application/pdf") {
      return faFilePdf;
    }
    if (mime.split("/")[0] === "image") {
      return faImage;
    }
    return faFile;
  }
  console.log(files);
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <ul className="w-full flex flex-col gap-5">
        {files &&
          files.map((result) => (
            <li
              key={result.id}
              className="p-5 h-14 flex text-white flex-row rounded-md bg-[#6e6e6e]  duration-500 font-semibold text-lg"
            >
              <a
                href={result.webViewLink as string}
                data-file-id={result.id}
                target="_blank"
                rel="noopener noreferrer"
                data-mime-type={result.mimeType}
                //  onClick={handleGoogleDriveShortcutLink}
                className="flex flex-row items-center gap-2"
              >
                <FontAwesomeIcon
                  className="h-8"
                  icon={getIconByMime(result.mimeType as string)}
                />
                {result.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
