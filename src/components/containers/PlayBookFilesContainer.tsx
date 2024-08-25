import { useFetchData } from "../common/useFetchData";
import { useRouter } from "next/router";
import PlayBookFiles from "../common/PlayBookFiles";
import { drive_v3 } from "googleapis";

export default function PlayBookFoldersContainer({
  files,
}: {
  files?: drive_v3.Schema$File[];
}) {
  const router = useRouter();
  const { data, loading, error } = useFetchData(
    `http://localhost:3000/api/folders/${router.query.fid}/files`
  );
  if (files) {
    return <PlayBookFiles files={files} />;
  }
  return <PlayBookFiles files={data?.files} />;
}
