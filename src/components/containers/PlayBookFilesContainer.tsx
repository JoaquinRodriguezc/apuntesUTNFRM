import { useFetchData } from "../common/useFetchData";
import { useRouter } from "next/router";
import PlayBookFiles from "../common/PlayBookFiles";

export default function PlayBookFoldersContainer() {
  const router = useRouter();
  const { data, loading, error } = useFetchData(
    `http://localhost:3000/api/folders/${router.query.fid}/files`
  );

  return <PlayBookFiles files={data?.files} />;
}
