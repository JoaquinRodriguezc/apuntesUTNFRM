import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "../../../utils/drive";
//GET FOLDERS IN A FOLDER API/FOLDERS/[fid]/FOLDERS
// TODO: CHECK REQ.METHOD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fid = req.query.fid as string;

  if (req.query.search as string) {
    const response: any = (
      await drive.files.get({
        fileId: fid,
        fields: "name,id,parents",
      })
    ).data;
    return res.status(200).json(response);
  }
  const data: any = (
    await drive.files.get({
      fileId: fid,
    })
  ).data;
  return res.status(200).json(data);
}
