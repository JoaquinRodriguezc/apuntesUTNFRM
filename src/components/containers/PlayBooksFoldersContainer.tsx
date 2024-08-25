import { useFetchData } from "../common/useFetchData";
import PlayBookFolders from "../common/PlayBookFolders";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

export default function PlayBookFoldersContainer() {
  const router = useRouter();
  const { data, loading, error } = useFetchData(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/folders/${router.query.fid}/folders`
  );
  if (loading && data?.files.length !== 0) {
    return (
      <ClipLoader
        color="black"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  if (!loading && data.files.length === 0) {
    return <h1>Todavia no hay contenido en esta carpeta</h1>;
  }

  return <PlayBookFolders folders={data?.files} />;
}
