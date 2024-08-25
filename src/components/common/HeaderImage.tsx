import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Title from "./Title";
import { faBook, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderImage = () => {
  return (
    <div className="h-min flex flex-col gap-5">
      <Link
        href={process.env.HOMEPAGE_URL ?? "/"}
        className="flex justify-center items-center"
      >
        <FontAwesomeIcon icon={faBook} className="h-24" />
      </Link>
      <Title />
    </div>
  );
};

export default HeaderImage;
