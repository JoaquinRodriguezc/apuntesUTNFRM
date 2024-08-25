import React from "react";
import Link from "next/link";
import IconUpLevel from "./IconUpLevel";

export default function BackButton({ data }) {
  return (
    <Link
      href={{
        pathname: `/list/[fid]`,
        query: {
          fid: data[0],
          fname: "get me",
        },
      }}
      as={`/list/${data[0]}`}
      key={data[0]}
    >
      <button
        className="h-min w-8 hover:scale-110 duration-200"
        onClick={() => {
          const container = document.querySelector(".searchContainer");
          if (typeof container != "undefined" && container) {
            container.innerHTML = "";
          }
        }}
      >
        <IconUpLevel />
      </button>
    </Link>
  );
}
