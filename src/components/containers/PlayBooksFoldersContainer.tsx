import { useFetchData } from "../common/useFetchData";
import PlayBookFolders from "../common/PlayBookFolders";

export default function PlayBookFoldersContainer({ fid }: { fid: string }) {
  const { data, loading, error } = useFetchData(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/folders/${fid}/folders`
  );
  if (loading) {
    return;
  }
  return <PlayBookFolders folders={data?.files} />;
}
