/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'www.asmitbm.me',
      pathname: '**',
    },
  ],
};

module.exports = nextConfig;
