import React, { useState, useEffect } from "react";
import axios from "axios";

const SimpleSignOn = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<any>(null);
  const [currentURL, setCurrentURL] = useState<string | null>(null);

  useEffect(() => {
    if (!currentURL) {
      setCurrentURL(window.location.href);
    }
  }, [currentURL]);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignOn = async () => {
    try {
      // Redirect the user to the Google authorization endpoint
      window.location.href =
        "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&response_type=code&client_id=" +
        process.env.NEXT_PUBLIC_CLIENT_ID +
        "&redirect_uri=" +
        currentURL +
        "login&scope=" +
        process.env.NEXT_PUBLIC_SCOPES;
    } catch (err: any) {
      setError(err);
    }
  };

  const handleAccessTokenExpiration = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh_token");

      const response = await axios.post("https://oauth2.googleapis.com/token", {
        refresh_token: refreshToken,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "refresh_token",
      });

      const accessToken = response.data.access_token;

      localStorage.setItem("access_token", accessToken);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="absolute top-5 right-5">
      {error && <div>An error occurred: {error.message}</div>}
      <button className="bg-50 rounded-full px-3 py-2 text-black font-medium hover:scale-105 duration-100" onClick={handleSignOn}>Sign On with Google</button>
    </div>
  );
};

export default SimpleSignOn;
