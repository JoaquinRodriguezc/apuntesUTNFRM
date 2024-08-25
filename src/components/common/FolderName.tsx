import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
type FolderNameProps = {
  name: string | undefined;
};
export default function FolderName({ name }: FolderNameProps) {
  return (
    <h2 className="flex flex-row items-center gap-8 text-2xl font-semibold">
      <BackButton />
      {name}
    </h2>
  );
}
