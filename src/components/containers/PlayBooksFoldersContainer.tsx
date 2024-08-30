import { useFetchData } from "../common/useFetchData";
import PlayBookFolders from "../common/PlayBookFolders";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PlayBookFoldersContainer() {
  const router = useRouter();
  console.log(router.query);
  const { data, loading, error } = useFetchData(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/folders/${router.query.fid}/folders`
  );
  return <PlayBookFolders folders={data?.files} />;
}
