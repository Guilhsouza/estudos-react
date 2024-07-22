/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['store.storeimages.cdn-apple.com']
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'store.storeimages.cdn-apple.com',
    //     port: '',
    //     pathname: '/**'
    //   }
    // ]
  }
};

export default nextConfig;
