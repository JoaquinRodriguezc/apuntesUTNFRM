import React, { useState, useEffect } from "react";
import handleAccessTokenExpiration from "./HandleAccessTokenExpiration";
import { useRouter } from "next/router";
import { drive_v3 } from "googleapis";
type SearchGoogleDriveProps = {
  setResults: React.Dispatch<React.SetStateAction<drive_v3.Schema$File[] | []>>;
};
export default function SearchGoogleDrive({
  setResults,
}: SearchGoogleDriveProps) {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<any>(null);
  const router = useRouter();
  const fid = router.query.fid;

  useEffect(() => {
    setResults([]);
  }, [router.asPath]);

  async function searchFiles() {
    setError(null);
    setResults([]);
    try {
      const res = await fetch(
        `http://localhost:3000/api/folders/${fid}/files?query=${query}`
      );
      const data: drive_v3.Schema$File[] = (await res.json()).files;
      setResults(data || []);
    } catch (err: any) {
      if (err.response?.status === 401) {
        handleAccessTokenExpiration();
      } else {
        setError(err);
      }
    }
  }

  function handleKeyPress(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      void searchFiles();
    }
  }
  return (
    <div className="h-min opacity-20 w-[800px] flex flex-col justify-center items-center gap-5">
      <div className="w-full flex items-center justify-between">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyPress}
          className="w-9/12 p-4 rounded-md border-2 border-solid border-black text-black"
          placeholder="Apuntes UTN MDZ"
          disabled
        />
        <button
          onClick={searchFiles}
          //className="w-2/12 p-4 text-white rounded-md bg-800 hover:bg-600 duration-200 font-semibold"
          className="w-2/12 p-4 text-white rounded-md bg-800"
          disabled
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
