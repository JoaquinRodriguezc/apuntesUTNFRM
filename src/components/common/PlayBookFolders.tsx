import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import handleAccessTokenExpiration from "../googleDrive/HandleAccessTokenExpiration";
import Link from "next/link";
import Image from "next/image";
import Folder from "../../../public/folder.png";
import { drive_v3 } from "googleapis";

const PlayBookFolders = () => {
  const router = useRouter();
  const fid = router.query.fid;

  const [results, setResults] = useState<drive_v3.Schema$File[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getFiles = async () => {
      setLoading(true);
      setError(null);
      setResults([]);

      try {
        let res: Response;
        res = await fetch(`http://localhost:3000/api/folders/${fid}/folders`);

        const data: drive_v3.Schema$File[] = (await res.json()).files;
        setResults(data);
        setLoading(false);
      } catch (err: any) {
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
      {loading && <p className="text-lg font-semibold pt-5">Loading...</p>}
      {error && <div>{error.message}</div>}
      <div className="w-full flex flex-col gap-5">
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
            className="w-full"
          >
            <button
              className="w-full rounded-md px-3 py-2 flex justify-between text-white items-center cursor-pointer bg-900 shadow-lg hover:shadow-950 hover:bg-950 hover:scale-105 duration-500 font-semibold text-2xl"
              onClick={() => {
                const container = document.querySelector(".searchContainer");
                if (container) {
                  container.innerHTML = "";
                }
              }}
            >
              <Image
                src={Folder}
                alt="Picture of the author"
                className="h-1/6 w-1/12"
              />
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
