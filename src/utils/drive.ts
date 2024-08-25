import { google, drive_v3 } from "googleapis";
let instance: drive_v3.Drive | null;
class Drive {
  constructor() {
    if (instance) {
      return instance;
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/gm, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
      scopes: "https://www.googleapis.com/auth/drive",
    });
    const d = google.drive({
      version: "v3",
      auth: auth,
    });
    instance = d;
    return instance;
  }
}
export const drive = new Drive() as drive_v3.Drive;
