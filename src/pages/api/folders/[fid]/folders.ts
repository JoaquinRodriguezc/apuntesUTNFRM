import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "../../../../utils/drive";
import { drive_v3 } from "googleapis";
//GET FOLDERS IN A FOLDER API/FOLDERS/[fid]/FOLDERS
// TODO: CHECK REQ.METHOD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fid = req.query?.fid
    ? (req.query.fid as string)
    : process.env.NEXT_PUBLIC_TARGET_FOLDER;
  const data: drive_v3.Schema$FileList = (
    await drive.files.list({
      q: `mimeType='application/vnd.google-apps.folder' and trashed = false and parents in '${fid}'`,
    })
  ).data;
  return res.status(200).json(data);
}
