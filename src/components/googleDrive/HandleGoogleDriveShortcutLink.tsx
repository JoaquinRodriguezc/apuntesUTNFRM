import axios from "axios";

const handleGoogleDriveShortcutLink = async (event: any) => {
  const link = event.target;
  const mimeType = link.getAttribute("data-mime-type");
  const fileId = link.getAttribute("data-file-id");
  const accessToken = localStorage.getItem("access_token");

  if (mimeType === "application/vnd.google-apps.shortcut") {
    event.preventDefault();

    try {
      const res = await axios.get(
        `https://www.googleapis.com/drive/v3/files/${fileId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: {
            supportsAllDrives: true,
            fields: "shortcutDetails/targetId",
          },
        }
      );
      const targetId = res.data.shortcutDetails.targetId;
      window.open(
        `https://docs.google.com/document/d/${targetId}/edit`,
        "_blank"
      );
    } catch (err: any) {}
  }
};

export default handleGoogleDriveShortcutLink;
