import PlayBookFoldersContainer from "../components/containers/PlayBooksFoldersContainer";
import { useRouter } from "next/router";
import PlayBookFilesContainer from "../components/containers/PlayBookFilesContainer";
import FolderNameContainer from "../components/containers/FolderNameContainer";
import Banner from "./../components/common/Banner";

export default function Drilldown() {
  const router = useRouter();
  const fid = router.query.fid as string;
  return (
    fid && (
      <div className="flex items-center justify-center flex-col">
        <FolderNameContainer fid={fid} />
        <PlayBookFoldersContainer fid={fid} />
        <PlayBookFilesContainer fid={fid} />
      </div>
    )
  );
}
