/**
 * Stub for the "three/webgpu" entry point.
 *
 * three-render-objects statically imports { WebGPURenderer } from
 * "three/webgpu", which drags the entire ~1.5 MB three.webgpu.js build into
 * the Turbopack chunk graph. The chunk load is unstable under Turbopack
 * (ChunkLoadError: node_modules_three_build_three_webgpu_*.js).
 *
 * At runtime the WebGPU path is never taken: three-render-objects defaults
 * `useWebGPU = false` and globe.gl never enables it, so WebGLRenderer is
 * always used. This stub satisfies the static import only.
 *
 * Wired up in next.config.ts via turbopack.resolveAlias.
 */
export class WebGPURenderer {
  // Instances are never constructed; if one ever were, fail loudly in dev.
  constructor() {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(
        'three/webgpu is stubbed out in this project; the globe renders with WebGLRenderer.'
      );
    }
  }
}

export default { WebGPURenderer };
