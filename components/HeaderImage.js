import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const HeaderImage = () => (
  <div className={styles.headerContainer}>
    <Link href={process.env.HOMEPAGE_URL ?? ""}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={process.env.logo_url}
          alt={process.env.logo_url}
          style={{
            width: process.env.logo_width,
            color: process.env.logo_color,
          }}
        />
        <h1 style={{ margin: "0 10px" }}>{process.env.title}</h1>
      </div>
    </Link>
  </div>
);

export default HeaderImage;
