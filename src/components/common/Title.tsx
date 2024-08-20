import React from "react";

const Title = ({ page }: { page: string }) => {
  const pageValue = "index";
  return page == pageValue ? (
    <div className="flex justify-center items-center flex-col h-1/6 gap-8">
      <h1 className="text-3xl font-bold">📖 APUNTES UTN 📖</h1>
      <p className="text-lg font-semibold w-2/3">
        Aca podes buscar carpetas de apuntes, archivos específicos y demas
        documentos con temas de estudio
      </p>
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col h-1/6 gap-8">
      <h1 className="text-3xl font-bold">📖 APUNTES UTN 📖</h1>
      <p className="text-lg font-semibold">UTN FRM</p>
    </div>
  );
};

export default Title;
