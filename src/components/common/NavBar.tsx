import React, { useState } from "react";
import HeaderImage from "../common/HeaderImage";
import GoogleDriveSearch from "../googleDrive/GoogleDriveSearch";
import { drive_v3 } from "googleapis";
import Link from "next/link";
import LinksList from "./LinksList";

const NavBar = () => {
  const [results, setResults] = useState<drive_v3.Schema$File[] | []>([]);

  return (
    <header className="bg-white hidden sm:block">
      <div className="mx-auto flex h-24 max-w-screen items-center gap-8 px-6 sm:px-10 lg:px-16">
        <div className="block">
          <span className="sr-only">Inicio</span>
          <HeaderImage />
        </div>

        <div className="flex flex-1 items-center justify-end lg:justify-between">
          <LinksList />
          <div className="flex items-center gap-4">
            <div className="block sm:hidden md:hidden lg:block">
              <GoogleDriveSearch setResults={setResults} />
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
