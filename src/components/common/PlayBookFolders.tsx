import React from "react";
import Link from "next/link";
import Image from "next/image";
import Folder from "../../../public/folder.png";
import { drive_v3 } from "googleapis";
type PlayBookFoldersProps = {
  folders: drive_v3.Schema$File[] | undefined;
};

export default function PlayBookFolders({ folders }: PlayBookFoldersProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      {folders &&
        folders.map((d) => (
          <Link
            href={{
              pathname: `/[fid]`,
              query: {
                fid: d.id,
              },
            }}
            as={`/${d.id}`}
            key={d.id}
            className="w-full"
          >
            <button
              className="w-full rounded-md px-3 py-2 flex justify-between text-white items-center bg-blue-950  hover:scale-105 transition font-semibold lg:text-2xl"
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
                className="h-14 w-14"
              />
              {d.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </button>
          </Link>
        ))}
    </div>
  );
}
