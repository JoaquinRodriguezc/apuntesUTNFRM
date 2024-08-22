import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BackButton from "./BackButton";
import { NextApiResponse } from "next";

const FolderName = () => {
  const router = useRouter();
  const fid = router.query.fid;
  const [fname, setFName] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoaded(false);
    setLoading(true);
    const fetchData = async () => {
      const res: Response = await fetch(
        `http://localhost:3000/api/folders/${fid}`
      );
      const data = await res.json();
      console.log(data);
      setFName(data.name);
      setLoaded(true);
      setLoading(false);
    };
    fetchData();
  }, [fid, router]);

  if (loading) {
    return <p className="text-lg font-semibold">Loading...</p>;
  }

  if (router && loaded && fid !== process.env.NEXT_PUBLIC_TARGET_FOLDER) {
    return (
      <h2 className="flex flex-row items-center gap-8 text-2xl font-semibold">
        <BackButton />
        {fname}
      </h2>
    );
  }

  return null;
};

export default FolderName;
