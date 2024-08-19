import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import handleAccessTokenExpiration from "../googleDrive/HandleAccessTokenExpiration";
import Link from "next/link";
import type { NextApiRequest, NextApiResponse } from "next";
const PlayBookFolders = () => {
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
        let res: Response;
        if (fid) {
          console.log("mandé fid", fid);
          res = await fetch(`http://localhost:3000/api/files?fid=${fid}`);
        } else {
          console.log("no mandé fid");
          res = await fetch(`http://localhost:3000/api/files`);
        }
        const data = await res.json();
        setResults(data.files);
        setLoading(false);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          handleAccessTokenExpiration();
        } else {
          setError(err);
        }
      }
    };
    getFiles();
  }, [fid]);

  return (
    <div className="w-full">
      {loading && <div style={{ display: "none" }}>Loading...</div>}
      {error && <div>{error.message}</div>}
      <div className="w-full flex flex-col items-start gap-3">
        {results.map((result) => (
          <Link
            href={{
              pathname: `/list/[fid]`,
              query: {
                fid: result.id,
              },
            }}
            as={`/list/${result.id}`}
            key={result.id}
          >
            <button
              className="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-full"
              onClick={() => {
                const container = document.querySelector(".searchContainer");
                if (container) {
                  container.innerHTML = "";
                }
              }}
            >
              {result.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlayBookFolders;
