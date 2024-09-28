import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "../../utils/drive";
import { drive_v3 } from "googleapis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fids = [
    process.env.NEXT_PUBLIC_QUIMICA_FOLDER,
    process.env.NEXT_PUBLIC_SISTEMAS_FOLDER,
    process.env.NEXT_PUBLIC_ELECTRONICA_FOLDER,
    process.env.NEXT_PUBLIC_ELECTROMECANICA_FOLDER,
    process.env.NEXT_PUBLIC_CIVIL_FOLDER,
    process.env.NEXT_PUBLIC_BASICAS_FOLDER,
    process.env.NEXT_PUBLIC_INGRESO_FOLDER,
  ];

  if (fids.length === 0) {
    return res.status(400).json({ message: "NO TENGO RUTAS" });
  }

  const folderParentsArray = await Promise.all(
    fids.map((fid) => getFolderParents(fid!))
  );

  const allFolderParents = folderParentsArray.flat();

  return res.status(200).json({ allFolderParents });
}

async function getFolderParents(fid: string): Promise<string[]> {
  let folderIds: string[] = [];

  console.log("Estoy en en el GETFOLDERPARENTS");

  async function getFolderId(fid: string) {
    const response: drive_v3.Schema$FileList = (
      await drive.files.list({
        fields: "files/id",
        q: `mimeType='application/vnd.google-apps.folder' and trashed = false and parents in '${fid}'`,
      })
    ).data;

    const subFolders = response.files || [];
    for (const folder of subFolders) {
      folderIds.push(folder.id!);
      await getFolderId(folder.id!);
      console.log("Estoy en la carpeta: " + folder.id);
    }
  }

  await getFolderId(fid);
  return folderIds;
}
