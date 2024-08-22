import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import IconUpLevel from "./IconUpLevel";
import { NextApiResponse } from "next";

const BackButton = () => {
  const router = useRouter();
  const fid = router.query.fid;
  const [fparent, setFParent] = useState("");
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchData = async () => {
      const res: Response = await fetch(
        `http://localhost:3000/api/folders/${fid}?search=parents`
      );
      const data = await res.json();
      setFParent(data.data.parents[0]);
    };
    fetchData();
  }, [fid]);

  return (
    <Link
      href={{
        pathname: `/list/[fid]`,
        query: {
          fid: fparent,
          fname: "get me",
        },
      }}
      as={`/list/${fparent}`}
      key={fparent}
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
};

export default BackButton;
