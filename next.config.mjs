/** @type {import('next').NextConfig} */
const nextConfig = {
  // No ESLint config ships with this scaffold; skip lint during builds.
  eslint: { ignoreDuringBuilds: true },
  async rewrites() {
    return [
      // Serve the UCP capability manifest at the well-known location.
      { source: '/.well-known/ucp', destination: '/api/ucp' },
    ];
  },
};

export default nextConfig;
