import { google, drive_v3 } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./secret.key.json",
    scopes: "https://www.googleapis.com/auth/drive",
  });

  const drive = google.drive({
    version: "v3",
    auth: auth,
  });
  let fid = req.query.fid as string;

  const response: any = await drive.files.get({
    fileId: fid,
    fields: "parents",
  });
  return res.status(200).json(response);
}
