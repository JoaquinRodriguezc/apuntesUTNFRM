import React from "react";

function Title() {
  return (
    <div className="flex justify-center items-center text-center flex-col h-1/6 gap-5">
      <h1 className="text-2xl lg:text-4xl font-bold"> APUNTES UTN MENDOZA </h1>
      <h2>
        <a href={process.env.DRIVE_LINK}>
          Clickeame para abrir drive directamente
        </a>
      </h2>
      <p className="text-xl font-semibold"></p>
    </div>
  );
}

export default Title;
