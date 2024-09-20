import Link from "next/link";

const LinksList = () => {
  const links = [
    {
      href: process.env.NEXT_PUBLIC_INGRESO_FOLDER ?? "#",
      label: "Ingreso",
    },
    {
      href: process.env.NEXT_PUBLIC_SISTEMAS_FOLDER ?? "#",
      label: "Sistemas",
    },
    {
      href: process.env.NEXT_PUBLIC_ELECTRONICA_FOLDER ?? "#",
      label: "Electrónica",
    },
    {
      href: process.env.NEXT_PUBLIC_BASICAS_FOLDER ?? "#",
      label: "Básicas",
    },
    {
      href: process.env.NEXT_PUBLIC_QUIMICA_FOLDER ?? "#",
      label: "Química",
    },
    {
      href: process.env.NEXT_PUBLIC_ELECTROMECANICA_FOLDER ?? "#",
      label: "Electromecánica",
    },
    {
      href: process.env.NEXT_PUBLIC_CIVIL_FOLDER ?? "#",
      label: "Civil",
    },
  ];

  return (
    <nav aria-label="Global" className="px-2">
      <ul className="flex flex-wrap items-center justify-center font-semibold text-sm sm:text-md gap-2 sm:gap-5">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-black transition hover:text-black/75"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LinksList;
