import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import handleAccessTokenExpiration from "../googleDrive/HandleAccessTokenExpiration";
import handleGoogleDriveShortcutLink from "../googleDrive/HandleGoogleDriveShortcutLink";

const PlayBookFiles = () => {
  const router = useRouter();
  const fid = router.query.fid;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFiles = async () => {
      setLoading(true);
      setError(null);
      setResults([]);

      try {
        const res = await fetch(
          `http://localhost:3000/api/files?fid=${fid}&files=true`
        );
        const data = await res.json();
        setResults(data.files);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          handleAccessTokenExpiration();
        } else {
          setError(err);
        }
      }

      setLoading(false);
    };

    getFiles();
  }, [fid]);

  return (
    fid !== process.env.TARGET_FOLDER && (
      <div style={{ width: "100%", textAlign: "left" }}>
        {loading && <div style={{ display: "none" }}>Loading...</div>}
        {error && <div>{error.message}</div>}
        <ul
          className=""
          style={{ width: "100%", textAlign: "left" }}
        >
          {results.map((result) => (
            <li key={result.id} className="">
              <a
                href={`https://docs.google.com/document/d/${result.id}/edit`}
                data-file-id={result.id}
                style={{ display: "block" }}
                target="_blank"
                rel="noopener noreferrer"
                data-mime-type={result.mimeType}
                onClick={handleGoogleDriveShortcutLink}
              >
                {result.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default PlayBookFiles;
