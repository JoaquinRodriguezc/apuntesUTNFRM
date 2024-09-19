import HeaderImage from "./HeaderImage";
import LinksList from "./LinksList";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="mx-auto max-w-5xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mt-10 flex justify-center items-center flex-col gap-6 md:gap-8">
          <HeaderImage />
          <LinksList />
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Este proyecto es de la comunidad, y cualquier ayuda suma muchísimo.
            Si te interesa ayudar, ya sea con ideas, código, documentación o lo
            que sea, sería genial para que el proyecto crezca aún más.
          </p>

          <a
            href="https://github.com/JoaquinRodriguezc/apuntesUTNFRM"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:text-gray-700/75"
          >
            <div className="group relative">
              <button>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 stroke-black transition hover:scale-125 hover:stroke-blue-500"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </button>
              <span
                className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-boldshadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
              >
                GitHub
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
