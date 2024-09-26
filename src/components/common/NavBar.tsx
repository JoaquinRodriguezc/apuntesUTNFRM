import React, { useState } from "react";
import HeaderImage from "../common/HeaderImage";
import GoogleDriveSearch from "../googleDrive/GoogleDriveSearch";
import { drive_v3 } from "googleapis";
import LinksList from "./LinksList";

const NavBar = () => {
  const [results, setResults] = useState<drive_v3.Schema$File[] | []>([]);
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  function haddleSideMenu() {
    setToggleSideMenu((prevState) => !prevState);
  }

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-24 max-w-screen items-center gap-8 px-6 sm:px-10 lg:px-16">
        <div className="block">
          <span className="sr-only">Inicio</span>
          <HeaderImage />
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-around lg:justify-between">
          <div className="hidden sm:block">
            <LinksList />
          </div>

          <div className="hidden md:hidden lg:block">
            <GoogleDriveSearch setResults={setResults} />
          </div>

          <button
            className="hidden rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75"
            onClick={haddleSideMenu}
          >
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
      {toggleSideMenu && (
        <div className="flex h-screen flex-col justify-between border-e bg-white">
          <div className="px-4 py-6 flex flex-col gap-5">
            <GoogleDriveSearch setResults={setResults} />
            <LinksList />
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 w-full text-center">
            <h2 className="text-xl font-medium p-5">Apuntes UTN Mendoza</h2>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
