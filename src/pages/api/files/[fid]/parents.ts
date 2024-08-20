import { google, drive_v3 } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import Drive from "../../../../utils/drive";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const drive = new Drive() as drive_v3.Drive;
  let fid = req.query.fid as string;

  const response: any = await drive.files.get({
    fileId: fid,
    fields: "parents",
  });
  return res.status(200).json(response);
}
