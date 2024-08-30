module.exports = {
  async redirects() {
    return [
      {
        source: "/sistemas",
        destination: `/${process.env.NEXT_PUBLIC_SISTEMAS_FOLDER}`,
        permanent: true,
      },
      {
        source: "/quimica",
        destination: `/${process.env.NEXT_PUBLIC_QUIMICA_FOLDER}`,
        permanent: true,
      },
      {
        source: "/ingreso",
        destination: `/${process.env.NEXT_PUBLIC_INGRESO_FOLDER}`,
        permanent: true,
      },
      {
        source: "/electronica",
        destination: `/${process.env.NEXT_PUBLIC_ELECTRONICA_FOLDER}`,
        permanent: true,
      },
      {
        source: "/electromecanica",
        destination: `/${process.env.NEXT_ELECTROMECANICA_FOLDER}`,
        permanent: true,
      },
      {
        source: "/basicas",
        destination: `/${process.env.NEXT_PUBLIC_BASICAS_FOLDER}`,
        permanent: true,
      },
    ];
  },
};
