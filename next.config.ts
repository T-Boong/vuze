import type { NextConfig } from "next";
const repo = "vuze";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "nng-phinf.pstatic.net",
      "livecloud-thumb.akamaized.net",
      "yt3.ggpht.com",
      "ngoyfhynryooaqgoqyek.supabase.co",
    ], // 필요한 도메인 추가
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
