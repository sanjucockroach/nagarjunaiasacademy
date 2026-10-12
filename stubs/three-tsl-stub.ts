/**
 * Stub for the "three/tsl" entry point (Three Shading Language helpers).
 *
 * Only consumed through three.webgpu.js code paths, which are stubbed out in
 * this project (see three-webgpu-stub.ts). Kept as a defensive alias so no
 * future transitive import of "three/tsl" can pull the WebGPU build in.
 *
 * Wired up in next.config.ts via turbopack.resolveAlias.
 */
const tslStub = new Proxy(
  {},
  {
    get: (_target, prop) => {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `[stub] three/tsl "${String(prop)}" is not available; WebGPU shading is disabled in this project.`
        );
      }
      return () => null;
    },
  }
);

export default tslStub;
