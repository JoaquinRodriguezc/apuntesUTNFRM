import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { useRouter } from "next/router";
type FolderNameProps = {
  name: string | undefined;
  backButton: any;
};
export default function FolderName({ name, backButton }: FolderNameProps) {
  return (
    <h2 className="flex flex-row w-full items-center gap-8 text-2xl font-semibold mb-5">
      <BackButton data={backButton} />
      {name}
    </h2>
  );
}
