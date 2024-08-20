import React, { useState, useEffect } from "react";
import handleAccessTokenExpiration from "./HandleAccessTokenExpiration";
import handleGoogleDriveShortcutLink from "./HandleGoogleDriveShortcutLink";
import { useRouter } from "next/router";

function SearchGoogleDrive() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleClickOutside = (event) => {
    if (
      !event.target.className ||
      typeof event.target.className.includes != "function"
    ) {
      return;
    }
    // Verifica si el clic fue fuera de los elementos deseados (ajusta según sea necesario)
    // Si la lógica anterior ya no aplica, puedes cambiarla o simplificarla
    if (!event.target.className.includes("some-other-class")) {
      setResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function searchFiles() {
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const res = await fetch(
        `http://localhost:3000/api/files?query=${query}&fid=${router.query.fid}`
      );
      const data = await res.json();
      console.log(data);
      setResults(data.files || []);
    } catch (err) {
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
    <div className="w-full flex flex-col justify-center items-center h-max pt-5 pb-5">
      <div className="w-[800px] flex items-center justify-evenly">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyPress}
          className="w-9/12 rounded-md p-4"
          placeholder="Apuntes UTN MDZ"
        />
        <button
          onClick={searchFiles}
          className="w-2/12 bg-slate-700 rounded-md p-4 hover:bg-slate-500"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-lg font-semibold pt-5">Loading...</p>}
      {error && <div>{error.message}</div>}
      <ul className="w-full text-left pt-2">
        {(results || []).map((result) => (
          <li key={result.id} className="pt-3 pb-3">
            <a
              href={`https://docs.google.com/document/d/${result.id}/edit`}
              data-file-id={result.id}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lg p-2 rounded-md bg-sky-600 hover:bg-sky-400"
              data-mime-type={result.mimeType}
              onClick={handleGoogleDriveShortcutLink}
            >
              {result.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchGoogleDrive;
