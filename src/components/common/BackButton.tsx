import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import IconUpLevel from "./IconUpLevel";
import { useFetchData } from "./useFetchData";

export default function BackButton() {
  const router = useRouter();
  const fid = router.query.fid;
  const { data, loading, error } = useFetchData(
    `http://localhost:3000/api/folders/${fid}?search=parents`
  );
  if (!data) {
    return;
  }
  return (
    <Link
      href={{
        pathname: `/list/[fid]`,
        query: {
          fid: data.data.parents[0],
          fname: "get me",
        },
      }}
      as={`/list/${data.data.parents[0]}`}
      key={data.data.parents[0]}
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
