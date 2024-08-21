import React, { useState, useEffect } from "react";
import Router from "next/router";

export const getStaticProps = async ({ query }) => {
  return { code: query.code };
};
export default function Login({ code }: { code: string }) {
  const [currentURL, setCurrentURL] = useState<string | null>(null);

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  useEffect(() => {
    if (currentURL) {
      handleRedirect(code, currentURL);
    }
  }, [currentURL]);

  return <div>Redirecting...</div>;
}
async function handleRedirect(code: string, currentURL = "") {
  try {
    console.log(currentURL);

    //console.log('response')
    //console.log(response.data)
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
