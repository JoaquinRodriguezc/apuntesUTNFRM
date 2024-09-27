import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "../../../../utils/drive";
import { drive_v3 } from "googleapis";
import FolderParents from "../../../../utils/links.json"

import { unstable_cache } from "next/cache";

//GET - FILES IN A FOLDER GET API/FOLDER/[fid]/FILES
// TODO: CHECK REQ.METHOD
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fid = req.query.fid as string;
  const query = req.query.query;
  if (query) {
    const folders = FolderParents.folderParents
    const data: drive_v3.Schema$FileList = (
      await drive.files.list({
        fields: "files/webViewLink,files/name,files/id,files/mimeType",
        q: `mimeType!='application/vnd.google-apps.folder' and trashed = false and parents in '${folders.join(
          "','"
        )}' and (name contains '${query}' or fullText contains '${query}')`,
      })
    ).data;
    return res.status(200).json(data);
  } else {
    const data: drive_v3.Schema$FileList = (
      await drive.files.list({
        fields: "files/webViewLink,files/name,files/id,files/mimeType",
        q: `mimeType!='application/vnd.google-apps.folder' and trashed = false and parents in '${fid}'`,
      })
    ).data;
    return res.status(200).json(data);
  }
}

// CACHE NOT WORKING
//const getFolders = unstable_cache(async (fid) => getFolderParents(fid));
