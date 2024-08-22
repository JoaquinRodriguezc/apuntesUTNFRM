import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import handleAccessTokenExpiration from "../googleDrive/HandleAccessTokenExpiration";
import handleGoogleDriveShortcutLink from "../googleDrive/HandleGoogleDriveShortcutLink";
import Image from "next/image";
import Document from "../../../public/document.png";
import { drive_v3 } from "googleapis";

const PlayBookFiles = () => {
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
        const res = await fetch(
          `http://localhost:3000/api/folders/${fid}/files`
        );
        const data: drive_v3.Schema$File[] = (await res.json()).files;
        setResults(data);
      } catch (err: any) {
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
    fid !== process.env.NEXT_PUBLIC_TARGET_FOLDER && (
      <div className="w-full flex flex-col justify-start items-center">
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
                //  onClick={handleGoogleDriveShortcutLink}
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
    )
  );
};

export default PlayBookFiles;
