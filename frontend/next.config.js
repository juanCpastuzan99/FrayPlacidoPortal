/** @type {import('next').NextConfig} */
const nextConfig = { output: "standalone", images: { domains: ["firebasestorage.googleapis.com"] }, experimental: { serverActions: { bodySizeLimit: "2mb" } }, poweredByHeader: false, compress: true, swcMinify: true };
module.exports = nextConfig;
