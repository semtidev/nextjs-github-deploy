/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    output: 'export',
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: 'https://semtidev.github.io/nextjs-github-deploy/',
};

module.exports = nextConfig