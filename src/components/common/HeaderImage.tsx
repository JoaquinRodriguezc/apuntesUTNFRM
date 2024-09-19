import React from "react";
import Link from "next/link";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderImage = () => {
  return (
    <Link
      href={process.env.NEXT_PUBLIC_BASE_URL ?? "/"}
      className="flex justify-center items-center hover:scale-105 transition text-blue-700"
    >
      <FontAwesomeIcon icon={faBook} className="h-10" />
    </Link>
  );
};

export default HeaderImage;
