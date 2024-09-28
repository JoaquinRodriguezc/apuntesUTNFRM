import PlayBookFiles from "../components/common/PlayBookFiles";
import { drive_v3 } from "googleapis";
import PlayBookFolders from "../components/common/PlayBookFolders";
import NoSRR from "../components/common/NoSRR";

export default function Drilldown() {
  let data;
  if (typeof window !== "undefined") {
    data = localStorage.getItem("search");
  }
  if (!data) {
    return;
  }
  const parsedData = JSON.parse(data) as drive_v3.Schema$File[];
  if (parsedData.length === 0) {
    return (
      <NoSRR>
        <div className="flex min-h-screen items-center justify-start pt-10 flex-col ">
          <p className="text-3xl">
            No encontramos nada relacionado a tu búsqueda! 😕
          </p>
          <p className="text-xl text-black/50">
            Verificá que pusiste los acentos correspondientes
          </p>
        </div>
      </NoSRR>
    );
  }
  const folders = parsedData.filter(
    (f) => f.mimeType === "application/vnd.google-apps.folder"
  );
  const files = parsedData.filter(
    (f) => f.mimeType !== "application/vnd.google-apps.folder"
  );
  return (
    <NoSRR>
      <div className="flex items-center min-h-screen justify-center flex-col">
        <PlayBookFolders folders={folders} />
        <PlayBookFiles files={files} />
      </div>
    </NoSRR>
  );
}
