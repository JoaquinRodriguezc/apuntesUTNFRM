import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let code = req.query.code as string;
  const currentURL = req.query.url as string;
  code = atob(code);
  console.log(JSON.stringify(req.body));
  const redirectUri = currentURL.replace(/\/login.*/, "/login");
  console.log("test");
  const response = await axios.post(`https://oauth2.googleapis.com/token`, {
    code: code,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.SECRET_CLIENT,
    grant_type: "authorization_code",
    redirect_uri: redirectUri,
  });
  const infoUser = await axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo`,
    {
      headers: { access_token: response.data.access_token },
    }
  );
  console.log(infoUser.data);
  return res.status(200).json(response.data);
}
