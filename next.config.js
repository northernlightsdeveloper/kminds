// next.config.js
// ─────────────────────────────────────────────────────────────
// Next.js configuration file.
//
// images.domains — Next.js blocks external images by default for security.
// Add any external domains you load images from here.
// When you use your own hosted images, you can remove these.
// ─────────────────────────────────────────────────────────────

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Allow Google's AI-generated image CDN (used in the starter content)
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      // When you add your own image hosting (e.g. Cloudinary, Supabase Storage),
      // add another entry here:
      // { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

module.exports = nextConfig;
