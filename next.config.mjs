/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pages folded into the redesign. Old links still land somewhere useful.
  async redirects() {
    return [
      { source: "/process", destination: "/services", permanent: false },
      { source: "/reviews", destination: "/#reviews", permanent: false },
      ...[
        ["shopify-development", "shopify"],
        ["wordpress-development", "wordpress"],
        ["ai-chatbot-voice-agents", "ai"],
        ["automations", "automation"],
        ["meta-ads", "ads"],
        ["landing-pages", "custom"],
      ].map(([from, to]) => ({ source: `/services/${from}`, destination: `/services#${to}`, permanent: false })),
      { source: "/services/:slug", destination: "/services", permanent: false },
    ];
  },
};

export default nextConfig;
