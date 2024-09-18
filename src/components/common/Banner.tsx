import Link from "next/link";

const Banner = () => {
  return (
    <div className="mx-auto w-full px-4 mt-10 sm:mt-4 lg:h-max">
      <div className="mx-auto max-w-xl text-center flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Apuntes UTN
          <strong className="font-extrabold text-blue-600 sm:block">
            Mendoza
          </strong>
        </h1>

        <p className="sm:text-xl/relaxed">
          En esta página encontrarás apuntes, documentos y recursos útiles para
          estudiar. Aquí reunimos todo para facilitar el acceso a la
          información.
        </p>

        <Link
          className="mt-5 flex flex-row w-max rounded-md font-semibold text-white text-lg sm:text-xl p-4 bg-blue-600 hover:bg-blue-700 transition gap-5"
          href="https://drive.google.com/drive/u/3/folders/1E4TVcYymK5-73b05_39XQW6QYiVf6b6s"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            className="h-8"
            viewBox="0 0 48 48"
          >
            <path fill="#FFC107" d="M17 6L31 6 45 30 31 30z"></path>
            <path fill="#1976D2" d="M9.875 42L16.938 30 45 30 38 42z"></path>
            <path fill="#4CAF50" d="M3 30.125L9.875 42 24 18 17 6z"></path>
          </svg>
          Ir al Drive
        </Link>
      </div>
    </div>
  );
};

export default Banner;
