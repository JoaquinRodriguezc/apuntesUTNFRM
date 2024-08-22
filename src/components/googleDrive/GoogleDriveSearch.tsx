import React, { useState, useEffect } from "react";
import handleAccessTokenExpiration from "./HandleAccessTokenExpiration";
import handleGoogleDriveShortcutLink from "./HandleGoogleDriveShortcutLink";
import { useRouter } from "next/router";
import { drive_v3 } from "googleapis";
import Image from "next/image";
import Document from "../../../public/document.png"

function SearchGoogleDrive() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<drive_v3.Schema$File[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();
  const fid = router.query.fid;
  // const handleClickOutside = (event:MouseEvent) => {
  //   if (
  //     !event.target.className ||
  //     typeof event.target.className.includes != "function"
  //   ) {
  //     return;
  //   }
  //   // Verifica si el clic fue fuera de los elementos deseados (ajusta según sea necesario)
  //   // Si la lógica anterior ya no aplica, puedes cambiarla o simplificarla
  //   if (!event.target.className.includes("some-other-class")) {
  //     setResults([]);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  useEffect(() => {
    setResults([]);
  }, [router.asPath]);

  async function searchFiles() {
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const res = await fetch(
        `http://localhost:3000/api/folders/${fid}/files?query=${query}`
      );
      const data: drive_v3.Schema$File[] = (await res.json()).files;
      setResults(data || []);
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        handleAccessTokenExpiration();
      } else {
        setError(err);
      }
    }

    setLoading(false);
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      void searchFiles();
    }
  };

  return (
    <div className="h-min w-[800px] flex flex-col justify-center items-center gap-5">
      <div className="w-full flex items-center justify-between">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyPress}
          className="w-9/12 p-4 rounded-md text-black"
          placeholder="Apuntes UTN MDZ"
        />
        <button
          onClick={searchFiles}
          className="w-2/12 p-4 rounded-md bg-800 hover:bg-600 duration-200 font-semibold"
        >
          Buscar
        </button>
      </div>

      {loading && <p className="text-lg font-semibold pt-5">Loading...</p>}
      {error && <div>{error.message}</div>}
      
      <ul className="w-full flex flex-col gap-5">
          {results.map((result) => (
            <li
              key={result.id}
              className="p-5 rounded-md bg-500 hover:bg-700 duration-500 font-semibold text-xl"
            >
              <a
                href={`https://docs.google.com/document/d/${result.id}/edit`}
                data-file-id={result.id}
                target="_blank"
                rel="noopener noreferrer"
                data-mime-type={result.mimeType}
                onClick={handleGoogleDriveShortcutLink}
                className="flex flex-row items-center gap-5"
              >
                <Image
                  src={Document}
                  alt="Picture of the author"
                  className="h-1/6 w-1/12"
                />
                {result.name}
              </a>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default SearchGoogleDrive;
