import GoogleDriveSearch from "../googleDrive/GoogleDriveSearch";

const Banner = () => {
  return (
    <div className="mx-auto w-full px-4 mt-10 sm:mt-4 lg:h-max pt-5">
      <div className="mx-auto max-w-xl text-center flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Apuntes UTN
          <span className="font-extrabold text-blue-600 sm:block">Mendoza</span>
        </h1>
        <div className="py-5">
          <GoogleDriveSearch />
        </div>
      </div>
    </div>
  );
};
export default Banner;
