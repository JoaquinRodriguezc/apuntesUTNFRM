import { useState } from "react";
import HeaderImage from "../common/HeaderImage";
import LinksList from "./LinksList";
import Link from "next/link";
import CrossIcon from "../CrossIcon";
const NavBar = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  function haddleSideMenu() {
    setToggleSideMenu((prevState) => !prevState);
  }

  return (
    <header className="bg-white sm:block">
      <div className="mx-auto flex h-24 max-w-screen items-center gap-8 px-6 sm:px-10 lg:px-16">
        <div className="block">
          <span className="sr-only">Inicio</span>
          <HeaderImage />
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-around lg:justify-between">
          <div className="hidden sm:block">
            <LinksList />
          </div>
          <div className="hidden sm:flex flex-row gap-2 sm:gap-5">
            <Link
              className="h-min flex flex-row w-max rounded-md font-semibold text-white text-lg sm:text-xl p-3 bg-blue-600 hover:bg-blue-700 transition gap-2 sm:gap-5"
              href="https://drive.google.com/drive/u/3/folders/1E4TVcYymK5-73b05_39XQW6QYiVf6b6s"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="h-7 sm:h-8"
                viewBox="0 0 48 48"
              >
                <path fill="#FFC107" d="M17 6L31 6 45 30 31 30z"></path>
                <path
                  fill="#1976D2"
                  d="M9.875 42L16.938 30 45 30 38 42z"
                ></path>
                <path fill="#4CAF50" d="M3 30.125L9.875 42 24 18 17 6z"></path>
              </svg>
              Ir al Drive
            </Link>

            <Link
              className="h-min flex flex-row w-max rounded-md font-semibold text-white text-lg sm:text-xl p-3 bg-blue-600 hover:bg-blue-700 transition gap-2 sm:gap-5"
              href="https://drive.google.com/drive/folders/1XqAJvCCtzAFxJ5hlaerHdUF8qgCsPCVi"
              target="_blank"
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 sm:h-8"
              >
                <g
                  data-name="79-Phone Call-Arrow up"
                  id="_79-Phone_Call-Arrow_up"
                >
                  <path d="M31,19H21a1,1,0,0,0-1,1v5H12V20a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v7a4.82,4.82,0,0,0,5,5H27a4.82,4.82,0,0,0,5-5V20A1,1,0,0,0,31,19Zm-1,8a2.85,2.85,0,0,1-3,3H5a2.85,2.85,0,0,1-3-3V21h8v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V21h8Z" />
                  <path d="M15,3.41V17h2V3.41l3.29,3.29,1.41-1.41-5-5a1,1,0,0,0-1.41,0l-5,5,1.41,1.41Z" />
                </g>
              </svg>{" "}
              Subi tu apunte
            </Link>
          </div>

          <button
            className="sm:hidden rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75"
            onClick={haddleSideMenu}
          >
            {!toggleSideMenu ? (
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
            ) : (
              <CrossIcon />
            )}
          </button>
        </div>
      </div>
      {toggleSideMenu && (
        <div className="absolute right-0 flex  flex-col gap-2 border-e bg-white/100">
          <Link
            className="flex flex-row w-52 rounded-md font-semibold text-white text-lg sm:text-xl p-3 bg-blue-600 hover:bg-blue-700 transition gap-2 sm:gap-5"
            href="https://drive.google.com/drive/u/3/folders/1E4TVcYymK5-73b05_39XQW6QYiVf6b6s"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="h-7 sm:h-8"
              viewBox="0 0 48 48"
            >
              <path fill="#FFC107" d="M17 6L31 6 45 30 31 30z"></path>
              <path fill="#1976D2" d="M9.875 42L16.938 30 45 30 38 42z"></path>
              <path fill="#4CAF50" d="M3 30.125L9.875 42 24 18 17 6z"></path>
            </svg>
            Ir al Drive
          </Link>
          <Link
            className="h-min flex flex-row w-52 rounded-md font-semibold text-white text-lg sm:text-xl p-3 bg-blue-600 hover:bg-blue-700 transition gap-2 sm:gap-5"
            href="https://drive.google.com/drive/folders/1XqAJvCCtzAFxJ5hlaerHdUF8qgCsPCVi"
            target="_blank"
          >
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 sm:h-8"
            >
              <g
                data-name="79-Phone Call-Arrow up"
                id="_79-Phone_Call-Arrow_up"
              >
                <path d="M31,19H21a1,1,0,0,0-1,1v5H12V20a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v7a4.82,4.82,0,0,0,5,5H27a4.82,4.82,0,0,0,5-5V20A1,1,0,0,0,31,19Zm-1,8a2.85,2.85,0,0,1-3,3H5a2.85,2.85,0,0,1-3-3V21h8v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V21h8Z" />
                <path d="M15,3.41V17h2V3.41l3.29,3.29,1.41-1.41-5-5a1,1,0,0,0-1.41,0l-5,5,1.41,1.41Z" />
              </g>
            </svg>{" "}
            Subi tu apunte
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
