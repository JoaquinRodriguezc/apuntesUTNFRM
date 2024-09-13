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
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/folders/${fid}/files?query=${query}`
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
    <div className="h-max opacity-20 w-full flex flex-row justify-center items-center gap-5">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyPress}
        className="md:w-full lg:w-96 p-4 rounded-md border-2 border-solid border-black text-black"
        placeholder="Apuntes UTN"
        disabled
      />
      <button
        onClick={searchFiles}
        className="w-full lg:w-1/4 p-4 text-white rounded-md bg-blue-600 hover:bg-blue-700 duration-200 font-semibold"
        disabled
      >
        Buscar
      </button>
    </div>
  );
}
