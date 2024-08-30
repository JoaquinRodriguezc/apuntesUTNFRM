import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "../../utils/drive";
import { drive_v3 } from "googleapis";
import { unstable_cache } from "next/cache";
import { get } from "http";

//GET - FILES IN A FOLDER GET API/FOLDER/[fid]/FILES
// TODO: CHECK REQ.METHOD
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fid =
    req.query.fid !== "undefined"
      ? (req.query.fid as string)
      : (process.env.NEXT_PUBLIC_TARGET_FOLDER as string);
  return res
    .status(200)
    .json(await getFolderParents("1E4TVcYymK5-73b05_39XQW6QYiVf6b6s"));
}
export async function getFolderParents(fid: string): Promise<string[]> {
  const targetFolderId = process.env.NEXT_PUBLIC_TARGET_FOLDER!;
  let folderIds = [targetFolderId];
  async function getFolderId(fid: string) {
    if (fid === "undefined") {
      fid = targetFolderId;
    }
    const response: drive_v3.Schema$FileList = (
      await drive.files.list({
        fields: "files/webViewLink,files/name,files/id,files/mimeType",
        q: `mimeType='application/vnd.google-apps.folder' and trashed = false and parents in '${fid}'`,
      })
    ).data;
    const subFolders = response.files || [];
    for (const folder of subFolders) {
      console.log(folder.id, folder.name);
      folderIds.push(folder.id!);
      //  await getFolderId(folder.id!);
    }
  }
  await getFolderId(fid);
  return folderIds;
}
// CACHE NOT WORKING
const getFolders = unstable_cache(async (fid) => getFolderParents(fid));
