import PlayBookFoldersContainer from "../components/containers/PlayBooksFoldersContainer";
import { useRouter } from "next/router";
import PlayBookFilesContainer from "../components/containers/PlayBookFilesContainer";
import FolderNameContainer from "../components/containers/FolderNameContainer";
import Banner from './../components/common/Banner';

export default function Drilldown() {
  const router = useRouter();
  let fid = router.query.fid as string;
  console.log(fid);
  return (
    fid && (
      <div className="flex  m-auto items-center w-[90%] lg:w-1/2 justify-center flex-col gap-8">
        <Banner/>
        <FolderNameContainer fid={fid} />
        <PlayBookFoldersContainer fid={fid} />
        <PlayBookFilesContainer fid={fid} />
      </div>
    )
  );
}
