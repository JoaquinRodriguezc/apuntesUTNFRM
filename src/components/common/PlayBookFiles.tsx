import React, { useState, useEffect } from "react";
import { drive_v3 } from "googleapis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFileExcel,
  faFilePdf,
  faFilePowerpoint,
  faFileWord,
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
    if (
      mime ===
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      return faFilePowerpoint;
    }
    if (
      mime ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      "application/vnd.google-apps.document"
    ) {
      return faFileWord;
    }
    if (mime === "application/vnd.google-apps.spreadsheet") {
      return faFileExcel;
    }

    return faFile;
  }
  return (
    <div className="w-full flex flex-col justify-start items-center my-10">
      <ul className="w-full flex flex-col gap-5 justify-center items-center">
        {files &&
          files.map((result) => (
            <li
              key={result.id}
              className="p-5 w-full flex text-white flex-row rounded-md bg-gray-700 hover:bg-gray-800 transition font-semibold text-lg"
            >
              <a
                href={result.webViewLink as string}
                data-file-id={result.id}
                target="_blank"
                rel="noopener noreferrer"
                data-mime-type={result.mimeType}
                //  onClick={handleGoogleDriveShortcutLink}
                className="flex flex-row items-center gap-5"
              >
                <FontAwesomeIcon
                  className="h-9"
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
