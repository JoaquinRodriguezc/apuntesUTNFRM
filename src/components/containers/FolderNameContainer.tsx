import { useFetchData } from "../common/useFetchData";
import { useRouter } from "next/router";
import FolderName from "../common/FolderName";

export default function FolderNameContainer() {
  const router = useRouter();
  const { data, loading, error } = useFetchData(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/folders/${router.query.fid}`
  );
  const backButtonRes = useFetchData(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/folders/${router.query.fid}?search=parents`
  );
  if (loading || router.query.fid === process.env.NEXT_PUBLIC_TARGET_FOLDER) {
    return null;
  }
  if (data && backButtonRes.data?.parents) {
    return (
      <FolderName name={data.name} backButton={backButtonRes.data.parents[0]} />
    );
  }
}
