/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Deepanshu',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://deepu759k.github.io/kasm-new/',
    contactUrl: 'https://github.com/deepu759k/kasm-new/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-new/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
