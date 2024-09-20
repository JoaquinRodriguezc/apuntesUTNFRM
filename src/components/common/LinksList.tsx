import Link from "next/link";

const LinksList = () => {
  return (
    <nav aria-label="Global" className="sm:hidden md:hidden lg:block">
      <ul className="flex flex-wrap items-center justify-center gap-5 font-semibold text-md">
        <li>
          <Link
            href={process.env.NEXT_PUBLIC_INGRESO_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            INGRESO
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_SISTEMAS_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            SISTEMAS
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_ELECTRONICA_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            ELECTRÓNICA
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_BASICAS_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            BÁSICAS
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_QUIMICA_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            QUÍMICA
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_ELECTROMECANICA_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            ELECTROMECÁNICA
          </Link>
        </li>

        <li>
          <Link
            href={process.env.NEXT_PUBLIC_CIVIL_FOLDER ?? "#"}
            className="text-black transition hover:text-black/75"
          >
            CIVIL
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LinksList;
