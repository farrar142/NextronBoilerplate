module.exports = {
  // trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/api/:path*",
        destination: "https://blog.honeycombpizza.link/api/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/cliserver/:path*",
        destination: "https://blog.honeycombpizza.link/cliserver/:path*",
      },
    ];
  },
};
