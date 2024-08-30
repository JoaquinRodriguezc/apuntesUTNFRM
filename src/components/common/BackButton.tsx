import React from "react";
import Link from "next/link";
import IconUpLevel from "./IconUpLevel";

export default function BackButton({ data }: { data: string }) {
  return (
    <Link
      href={{
        pathname: `/[fid]`,
        query: {
          fid: data,
          fname: "get me",
        },
      }}
      as={`/${data}`}
      key={data}
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
