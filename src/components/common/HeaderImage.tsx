import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Title from "./Title";

const HeaderImage = () => {
  return (
    <div className="h-min flex flex-col gap-5">
      <Link
        href={process.env.HOMEPAGE_URL ?? "/"}
        className="flex justify-center items-center"
      >
        <Image
          src={Logo}
          alt="apuntes utn frm"
          className="h-32 w-28"
        />
      </Link>
      <Title />
    </div>
  );
};

export default HeaderImage;
