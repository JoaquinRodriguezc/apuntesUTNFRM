import React, { useState } from "react";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
import { drive_v3 } from "googleapis";

export default function SearchGoogleDrive() {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function searchFiles(e: React.KeyboardEvent | React.MouseEvent) {
    e.preventDefault();
    if (query.trimStart() === "") {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/folders/a/files?query=${query}`
      );
      if (!res.ok) {
        throw new Error();
      }
      const data = (await res.json()).files as drive_v3.Schema$File[];
      localStorage.setItem("search", JSON.stringify(data));
      router.push("/search");
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
    }
  }

  function handleKeyPress(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      void searchFiles(event);
    }
  }
  return (
    <div className="h-max  w-full flex flex-col md:flex-row justify-center items-center gap-5">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyPress}
        className="w-full lg:w-96 p-4 rounded-md border-2 border-solid border-black text-black"
        placeholder="Informatica I"
      />
      <button
        onClick={searchFiles}
        disabled={loading}
        className="w-full lg:w-28 h-16 p-4 text-white rounded-md bg-blue-600 hover:bg-blue-700 duration-200 font-semibold"
      >
        {loading ? <ClipLoader /> : "Buscar"}
      </button>
    </div>
  );
}
