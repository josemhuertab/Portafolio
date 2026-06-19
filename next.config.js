const nextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF primero — mejor compresión, WebP como fallback
    formats: ['image/avif', 'image/webp'],
    // Tamaños ajustados al layout real (max-w-3xl ~768px, carrusel ~464px)
    deviceSizes: [640, 768, 1024, 1280],
    imageSizes: [176, 256, 464, 928],
    // Cache de imágenes optimizadas — 30 días
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
      // Cache estático agresivo para imágenes y fuentes
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/documents/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
