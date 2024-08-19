import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "../styles/Home.module.css";
import handleAccessTokenExpiration from "./HandleAccessTokenExpiration";
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
    <div style={{ width: "100%", textAlign: "left" }}>
      {loading && <div style={{ display: "none" }}>Loading...</div>}
      {error && <div>{error.message}</div>}
      <div className={styles.grid}>
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
            <div
              className={styles.card}
              onClick={() => {
                const container = document.querySelector(".searchContainer");
                if (container) {
                  container.innerHTML = "";
                }
              }}
            >
              <h3>{result.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlayBookFolders;
