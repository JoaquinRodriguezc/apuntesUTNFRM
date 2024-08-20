import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";

const HeaderImage = () => {
  return (
      <Link
        href={process.env.HOMEPAGE_URL ?? "/"}
        className="flex justify-center items-center"
      >
        <Image src={Logo} alt="Picture of the author" className=" h-40 w-28 py-5"/>
      </Link>
  );
};

export default HeaderImage;
