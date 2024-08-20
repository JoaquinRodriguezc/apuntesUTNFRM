import { google, drive_v3 } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import Drive from "../../utils/drive";
const drive = new Drive() as drive_v3.Drive;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fid = req.query?.fid
    ? (req.query.fid as string)
    : process.env.NEXT_PUBLIC_TARGET_FOLDER;
  const name = req.query.name ? (req.query.name as string) : undefined;
  const files = req.query.files ? (req.query.files as string) : undefined;
  const query = req.query.query ? (req.query.query as string) : undefined;
  console.log(fid, name, files);
  if (name === "true") {
    const data: any = (
      await drive.files.get({
        fileId: fid,
      })
    ).data;
    return res.status(200).json(data);
  }
  if (files === "true") {
    const data: drive_v3.Schema$FileList = (
      await drive.files.list({
        q: `mimeType!='application/vnd.google-apps.folder' and trashed = false and parents in '${fid}'`,
      })
    ).data;
    return res.status(200).json(data);
  }
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
        q: `mimeType='application/vnd.google-apps.folder' and trashed = false and parents in '${fid}'`,
      })
    ).data;
    return res.status(200).json(data);
  }
}
async function getFolderParents(fid: string): Promise<string[]> {
  const targetFolderId = process.env.NEXT_PUBLIC_TARGET_FOLDER;
  let folderIds = [targetFolderId];
  async function getFolderId(fid) {
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
      folderIds.push(folder.id);
      await getFolderId(folder.id);
    }
  }
  await getFolderId(fid);
  console.log(folderIds);
  return folderIds;
}
