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
  const fid = req.query?.fid
    ? (req.query.fid as string)
    : process.env.TARGET_FOLDER;
  const name = req.query.name ? (req.query.name as string) : undefined;
  const files = req.query.files ? (req.query.files as string) : undefined;
  console.log(fid, name, files);
  // SI NAME ES TRUE SIGNIFICA QUE BUSCAMOS UN ARCHIVO PARA SABER SU NOMBRE
  if (name === "true") {
    const data: any = (
      await drive.files.get({
        fileId: fid,
      })
    ).data;
    return res.status(200).json(data);
  }
  // SI FILES ES TRUE SIGNIFCA QUE BUSCAMOS TODOS LOS ARCHIVOS DENTRO DE ESA CARPETA
  if (files === "true") {
    const data: drive_v3.Schema$FileList = (
      await drive.files.list({
        q: `mimeType!='application/vnd.google-apps.folder' and trashed = false and parents in '${fid}'`,
      })
    ).data;
    return res.status(200).json(data);
    // BUSCAMOS CARPETAS DENTRO DE ESA CARPETA
  } else {
    const data: drive_v3.Schema$FileList = (
      await drive.files.list({
        q: `mimeType='application/vnd.google-apps.folder' and trashed = false and parents in '${fid}'`,
      })
    ).data;
    return res.status(200).json(data);
  }
}
