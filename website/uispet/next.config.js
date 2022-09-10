const withTM = require('next-transpile-modules')(['@polym/ui'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = withTM(nextConfig)
