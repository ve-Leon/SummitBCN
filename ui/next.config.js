/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	// To solve this error: https://nextjs.org/docs/messages/failed-loading-swc
	swcMinify: false,
};

module.exports = nextConfig;
