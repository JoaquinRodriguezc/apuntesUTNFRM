import axios from "axios";

const handleAccessTokenExpiration = async () => {
  const refreshToken = localStorage.getItem("refresh_token");
  const clientId = process.env.client_id;
  const clientSecret = process.env.client_secret;

  try {
    const response = await axios.post("https://oauth2.googleapis.com/token", {
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
    });

    const accessToken = response.data.access_token;
    localStorage.setItem("access_token", accessToken);
    return accessToken;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default handleAccessTokenExpiration;
