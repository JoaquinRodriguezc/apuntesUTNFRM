import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";

const HeaderImage = () => {
  return (
    <div className="h-max pt-5 pb-5 w-full">
      <Link
        href={process.env.HOMEPAGE_URL ?? "/"}
        className="flex justify-center items-center"
      >
        <Image src={Logo} alt="Picture of the author" className="h-1/4 w-1/5" />
      </Link>
    </div>
  );
};

export default HeaderImage;
