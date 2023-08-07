/** @type {import('next').NextConfig} */
const nextConfig = {
  pdf: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/file/d/1grlRa7sulmsyqfP4zAEKOJQUhWc9YTZc/view?usp=drivesdk",
      },
    ],
  },
};

module.exports = nextConfig;
