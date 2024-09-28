import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "../../../../utils/drive";
import { drive_v3 } from "googleapis";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const fid = req.query.fid as string;
    const query = req.query.query;
    if (query) {
      const data: drive_v3.Schema$FileList = (
        await drive.files.list({
          fields: "files/webViewLink,files/name,files/id,files/mimeType",
          q: `trashed = false and (name contains '${query}')`,
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
  } catch (e) {
    console.log(e);
    return res.status(500).json({});
  }
}
