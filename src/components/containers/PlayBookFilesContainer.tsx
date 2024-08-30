import { useFetchData } from "../common/useFetchData";
import { useRouter } from "next/router";
import PlayBookFiles from "../common/PlayBookFiles";
import { drive_v3 } from "googleapis";
import ClipLoader from "react-spinners/ClipLoader";

export default function PlayBookFoldersContainer({
  files,
  fid,
}: {
  fid: string;
  files?: drive_v3.Schema$File[];
}) {
  const { data, loading, error } = useFetchData(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/folders/${fid}/files`
  );
  if (files) {
    return <PlayBookFiles files={files} />;
  }
  if (loading) {
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
  return <PlayBookFiles files={data?.files} />;
}
