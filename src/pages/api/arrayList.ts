import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "../../utils/drive";  // Ajusta la ruta según donde esté tu archivo drive.ts
import { drive_v3 } from "googleapis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const fid = process.env.NEXT_PUBLIC_TARGET_FOLDER;
    console.log("Estoy en el arrayList: "+fid);
    

    if (!fid) {
      return res.status(400).json({ message: "NO TENGO EL .ENV :(" });
    }

    const folderParents = await getFolderParents(fid);

    return res.status(200).json({ folderParents });
}

// Función para obtener los padres de una carpeta
async function getFolderParents(fid: string): Promise<string[]> {
  let folderIds: string[] = [];

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
