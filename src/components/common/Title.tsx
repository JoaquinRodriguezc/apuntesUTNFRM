import React from "react";

const Title = ({ page }) => {
  const pageValue = "index";
  return page == pageValue ? (
    <div className="flex justify-center items-center flex-col h-1/6 gap-8">
      <h1 className="text-5xl font-bold">📖 APUNTES UTN 📖</h1>
      <p className="text-lg font-semibold">
        Aquí puedes explorar tus carpetas de apuntes, buscar archivos específicos y demas documentos
      </p>
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col h-1/6 gap-8">
      <h1 className="text-3xl font-bold">📖 APUNTES UTN 📖</h1>
      <p className="text-lg font-semibold">
        Entre a la carpeta en la cual quiere buscar apuntes o archivos
      </p>
    </div>
  );
};

export default Title;
