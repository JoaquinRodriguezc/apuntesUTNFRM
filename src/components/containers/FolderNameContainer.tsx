import { useFetchData } from "../common/useFetchData";
import { useRouter } from "next/router";
import FolderName from "../common/FolderName";

export default function FolderNameContainer() {
  const router = useRouter();
  const { data, loading, error } = useFetchData(
    `http://localhost:3000/api/folders/${router.query.fid}`
  );
  if (loading) {
    return null;
  }
  if (data) return <FolderName name={data.name} />;
}
