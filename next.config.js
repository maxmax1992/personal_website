/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // You can duplicate environment variables here to ensure they're available
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },
  // Ensure server-side environment variables are properly forwarded
  serverRuntimeConfig: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },
  // Public runtime config (be cautious not to expose sensitive variables)
  publicRuntimeConfig: {
    // Empty for now, add public variables if needed
  },
}

module.exports = nextConfig 