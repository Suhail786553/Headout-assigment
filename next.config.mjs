/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn-imgix.headout.com','i.pinimg.com','giphy.com', 'media.giphy.com','cdn-imgix.hseadout.com'],
      },
};

export default nextConfig;
