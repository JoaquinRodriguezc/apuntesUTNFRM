import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function UploadFileButton() {
  const router = useRouter();
  const fid = router.query.fid;
  const [fparent, setFParent] = useState("");
  const [file, setFile] = useState();
  //const [accessToken, setAccessToken] = useState<string | null>(null);

  function handleUploadFile(e: any) {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(e.target.files[0]);

    try {
      const accessToken = localStorage.getItem("access_token");

      console.log("accestoken", accessToken);
      const metadata = {
        name: file.name,
        mimeType: file.type,
        parents: [process.env.NEXT_PUBLIC_TARGET_FOLDER],
      };

      // Create a FormData object to hold the metadata and file content
      const formData = new FormData();
      formData.append(
        "metadata",
        new Blob([JSON.stringify(metadata)], { type: "application/json" })
      );
      formData.append("file", file);
      const res = axios.post(
        "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
        formData, // file content directly as the POST body
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/related;",
          },
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <input
      type="file"
      className="font-medium"
      onChange={(e) => handleUploadFile(e)}
    />
  );
}
