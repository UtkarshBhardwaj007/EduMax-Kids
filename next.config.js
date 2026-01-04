/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/EduMax-Kids' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/EduMax-Kids/' : '',
  trailingSlash: true,
}

module.exports = nextConfig

