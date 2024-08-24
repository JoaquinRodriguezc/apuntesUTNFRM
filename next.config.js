module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: `/list/${process.env.NEXT_PUBLIC_TARGET_FOLDER}`,
        permanent: true,
      },
    ];
  },
};
