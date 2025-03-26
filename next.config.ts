import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["nng-phinf.pstatic.net", "livecloud-thumb.akamaized.net"], // 필요한 도메인 추가
  },
};

export default nextConfig;
