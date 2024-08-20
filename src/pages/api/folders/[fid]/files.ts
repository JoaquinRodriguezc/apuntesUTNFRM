import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "../../../../utils/drive";
import { drive_v3 } from "googleapis";
//GET - FILES IN A FOLDER GET API/FOLDER/[fid]/FILES
// TODO: CHECK REQ.METHOD
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fid = req.query.fid
    ? (req.query.fid as string)
    : (process.env.NEXT_PUBLIC_TARGET_FOLDER as string);
  const query = req.query.query;
  if (query) {
    const folders = await getFolderParents(fid);
    const data: drive_v3.Schema$FileList = (
      await drive.files.list({
        q: `mimeType!='application/vnd.google-apps.folder' and trashed = false and parents in '${folders.join(
          "','"
        )}' and (name contains '${query}' or fullText contains '${query}')`,
      })
    ).data;
    return res.status(200).json(data);
  } else {
    const data: drive_v3.Schema$FileList = (
      await drive.files.list({
        q: `mimeType!='application/vnd.google-apps.folder' and trashed = false and parents in '${fid}'`,
      })
    ).data;
    return res.status(200).json(data);
  }
}
async function getFolderParents(fid: string): Promise<string[]> {
  const targetFolderId = process.env.NEXT_PUBLIC_TARGET_FOLDER!;
  let folderIds = [targetFolderId];
  async function getFolderId(fid: string) {
    if (fid === "undefined") {
      fid = targetFolderId;
    }
    const response: drive_v3.Schema$FileList = (
      await drive.files.list({
        q: `mimeType='application/vnd.google-apps.folder' and trashed = false and parents in '${fid}'`,
      })
    ).data;
    const subFolders = response.files || [];
    for (const folder of subFolders) {
      folderIds.push(folder.id!);
      await getFolderId(folder.id!);
    }
  }
  await getFolderId(fid);
  console.log(folderIds);
  return folderIds;
}
