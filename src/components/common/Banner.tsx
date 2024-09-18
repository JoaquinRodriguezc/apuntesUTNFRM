import Link from "next/link";

const Banner = () => {
  return (
    <div className="mx-auto max-w-screen px-4 py-24 lg:h-max">
      <div className="mx-auto max-w-xl text-center flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Apuntes UTN 
          <strong className="font-extrabold text-blue-600 sm:block">
            Mendoza
          </strong>
        </h1>

        <p className="sm:text-xl/relaxed">
          En esta página encontrarás apuntes, documentos y recursos útiles para
          estudiar. Aquí reunimos todo para facilitar el acceso a la información.
        </p>

        <Link
          className="mt-5 block w-max rounded-md font-semibold text-lg sm:text-xl p-4 bg-blue-600 hover:bg-blue-700 duration-200 "
          href="https://drive.google.com/drive/u/3/folders/1E4TVcYymK5-73b05_39XQW6QYiVf6b6s"
          target="_blank"
        >
          Clickeame para abrir Drive directamente
        </Link>
      </div>
    </div>
  );
};

export default Banner;
