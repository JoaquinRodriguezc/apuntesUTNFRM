import React, { useEffect, useState } from "react";
import Link from "next/link";
import IconUpLevel from "./IconUpLevel";
type FolderNameProps = {
  name: string | undefined;
  parent: any;
};
export default function FolderName({ name, parent }: FolderNameProps) {
  return (
    <h2 className="flex flex-row items-center gap-8 text-2xl font-semibold">
      <Link
        href={{
          pathname: `/list/[fid]`,
          query: {
            fid: parent,
            fname: "get me",
          },
        }}
        as={`/list/${parent}`}
        key={parent}
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
      {name}
    </h2>
  );
}
