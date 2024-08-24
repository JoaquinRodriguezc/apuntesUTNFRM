import { useFetchData } from "../common/useFetchData";
import PlayBookFolders from "../common/PlayBookFolders";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PlayBookFoldersContainer() {
  const router = useRouter();
  const { data, loading, error } = useFetchData(
    `http://localhost:3000/api/folders/${router.query.fid}/folders`
  );
  return <PlayBookFolders folders={data?.files} />;
}
