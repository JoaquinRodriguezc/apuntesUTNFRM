import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import handleAccessTokenExpiration from "../googleDrive/HandleAccessTokenExpiration";
import Link from "next/link";
import Image from "next/image";
import Folder from "../../../public/folder.png";
import { drive_v3 } from "googleapis";
type PlayBookFoldersProps = {
  folders: drive_v3.Schema$File[] | undefined;
};

export default function PlayBookFolders({ folders }: PlayBookFoldersProps) {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-5">
        {folders &&
          folders.map((d) => (
            <Link
              href={{
                pathname: `/list/[fid]`,
                query: {
                  fid: d.id,
                },
              }}
              as={`/list/${d.id}`}
              key={d.id}
              className="w-full"
            >
              <button
                className="w-full rounded-md px-3 py-2 flex justify-between text-white items-center cursor-pointer bg-neutral-800 shadow-lg hover:shadow-950  hover:scale-105 duration-500 font-semibold text-2xl"
                onClick={() => {
                  const container = document.querySelector(".searchContainer");
                  if (container) {
                    container.innerHTML = "";
                  }
                }}
              >
                <Image
                  src={Folder}
                  alt="Picture of the author"
                  className="h-1/6 w-1/12"
                />
                {d.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-5 h-5 animate-bounce"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  ></path>
                </svg>
              </button>
            </Link>
          ))}
      </div>
    </div>
  );
}
