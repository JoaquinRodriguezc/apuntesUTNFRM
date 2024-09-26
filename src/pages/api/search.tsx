import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: "Missing authorization token" });
  }

  try {
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: token });

    const service = google.drive({ version: "v3", auth });
    const response = await service.files.list({
      q: `name contains '${query}'`,
      fields: "files(id, name)",
      spaces: "drive",
    });

    res.status(200).json(response.data.files);
  } catch (error) {
    console.error("Error fetching files: ", error);
    res.status(500).json({ error: "Error fetching files" });
  }
}
