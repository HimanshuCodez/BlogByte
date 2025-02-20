import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:"https://unsplash.com"
      },
    {
      protocol: 'https',
      hostname: 'in.pinterest.com',
    },
    ]
  }
};

export default nextConfig;
