import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BackButton from "./BackButton";
import styles from "../styles/Home.module.css";
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
        `http://localhost:3000/api/files?fid=${fid}&name=true`
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
    return <div>Loading...</div>;
  }

  if (router && loaded && fid !== process.env.TARGET_FOLDER) {
    return (
      <div className={styles.FolderHeader}>
        <h2>
          <BackButton />
          {fname}
        </h2>
      </div>
    );
  }

  return null;
};

export default FolderName;
