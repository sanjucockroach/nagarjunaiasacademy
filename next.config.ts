import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  turbopack: {
    resolveAlias: {
      // Keep the three.js WebGPU build out of the chunk graph entirely.
      // three-render-objects statically imports { WebGPURenderer } from
      // "three/webgpu", which produced ChunkLoadError for
      // node_modules_three_build_three_webgpu_*.js under Turbopack.
      // The WebGPU renderer is never used (useWebGPU defaults to false),
      // so stubbing the entry points is safe and cuts ~1.5 MB.
      "three/webgpu": "./stubs/three-webgpu-stub.ts",
      "three/tsl": "./stubs/three-tsl-stub.ts",
    },
  },
};

export default nextConfig;
