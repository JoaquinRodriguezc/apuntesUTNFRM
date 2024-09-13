import Link from "next/link";

const LinksList = () => {
  return (
    <nav aria-label="Global" className="sm:hidden md:hidden lg:block">
      <ul className="flex flex-wrap items-center gap-6 font-semibold text-md">
        <li>
          <Link
            href={process.env.NEXT_PUBLIC_INGRESO_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            Ingreso
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_SISTEMAS_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            Ing Sist Inf
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_ELECTRONICA_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            Ing Electrónica
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_BASICAS_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            Básicas
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_QUIMICA_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            Ing Química
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_ELECTROMECANICA_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            Ing Electromecánica
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_CIVIL_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            Ing Civil
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LinksList;
