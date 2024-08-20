import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import handleAccessTokenExpiration from "./HandleAccessTokenExpiration";
import handleGoogleDriveShortcutLink from "./HandleGoogleDriveShortcutLink";

const SearchGoogleDrive = () => {
  const [targetFolderId, setTargetFolderId] = useState(
    process.env.NEXT_PUBLIC_TARGET_FOLDER
  );
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const searchFiles = async () => {
    setLoading(true);
    setError(null);
    setResults([]);

    const accessToken = localStorage.getItem("access_token");
    let folderIds = [targetFolderId];

    try {
      let res = await axios.get("https://www.googleapis.com/drive/v3/files", {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          source: "GoogleDriveSource",
          includeTeamDriveItems: true,
          supportsAllDrives: true,
          q: `mimeType='application/vnd.google-apps.folder' and trashed = false and parents in '${targetFolderId}'`,
        },
      });

      const subFolders = res.data.files || [];
      subFolders.forEach((folder) => {
        folderIds.push(folder.id);
      });

      res = await axios.get("https://www.googleapis.com/drive/v3/files", {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          source: "GoogleDriveSource",
          includeTeamDriveItems: true,
          supportsAllDrives: true,
          q: `mimeType!='application/vnd.google-apps.folder' and trashed = false and parents in '${folderIds.join(
            "','"
          )}' and (name contains '${query}' or fullText contains '${query}')`,
        },
      });

      setResults(res.data.files || []);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        handleAccessTokenExpiration();
      } else {
        setError(err);
      }
    }

    setLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchFiles();
    }
  };
  
  return (
    <div className="w-full flex flex-col justify-center items-center h-max pt-5 pb-5">
      <div className="w-[800px] flex items-center justify-evenly">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={handleKeyPress}
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
};

export default SearchGoogleDrive;
