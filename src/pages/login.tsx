import React, { useState, useEffect } from "react";
import Router from "next/router";

Login.getInitialProps = async ({ query }: { query: { code: string } }) => {
  return { code: query.code };
};
export default function Login({ code }: { code: string }) {
  const [currentURL, setCurrentURL] = useState<string | null>(null);
  console.log(code);
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  useEffect(() => {
    if (currentURL) {
      handleRedirect(code, currentURL);
    }
  }, [currentURL]);

  return <div>Redirecting ...</div>;
}
async function handleRedirect(code: string, currentURL = "") {
  try {
    code = btoa(code);
    const res = await fetch(
      `http://localhost:3000/api/auth?code=${code}&url=${currentURL}`
    );
    const data = await res.json();
    console.log(data);

    const accessToken = data.access_token;
    const refreshToken = data.refresh_token;
    localStorage.setItem("code", code);
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    Router.push("/");
  } catch (err) {
    alert(err);
  }
}
