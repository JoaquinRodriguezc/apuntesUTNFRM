import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function UploadFileButton() {
  const router = useRouter();
  const fid = router.query.fid;
  const [fparent, setFParent] = useState("");
  const [file, setFile] = useState();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (accessToken) {
      setAccessToken(token);
    }
  }, []);

  function handleUploadFile(e: any) {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(e.target.files[0]);

    try {
      const res = axios.post(
        "https://www.googleapis.com/upload/drive/v3/files?uploadType=media",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          requestBody: {
            name: "test.jpg",
          },
          media: {
            body: e.target.files[0],
          },
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  return <input type="file" onChange={(e) => handleUploadFile(e)} />;
}
