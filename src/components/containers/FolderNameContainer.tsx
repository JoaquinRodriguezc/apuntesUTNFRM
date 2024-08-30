import { useFetchData } from "../common/useFetchData";
import { useRouter } from "next/router";
import FolderName from "../common/FolderName";

export default function FolderNameContainer({ fid }: { fid: string }) {
  const { data, loading, error } = useFetchData(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/folders/${fid}`
  );
  const backButtonRes = useFetchData(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/folders/${fid}?search=parents`
  );
  if (loading || fid === process.env.NEXT_PUBLIC_TARGET_FOLDER) {
    return null;
  }
  if (
    !loading &&
    !backButtonRes.loading &&
    data &&
    backButtonRes.data?.parents
  ) {
    return (
      <FolderName name={data.name} backButton={backButtonRes.data.parents[0]} />
    );
  }
}
