export const index = 1;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/fallbacks/error.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/1.CQDSLQTy.js",
  "_app/immutable/chunks/BwuXgrL6.js",
  "_app/immutable/chunks/PUWf84Ah.js",
  "_app/immutable/chunks/DH-PflIw.js",
  "_app/immutable/chunks/DQ9W_XTn.js",
  "_app/immutable/chunks/B0IYIc1v.js",
  "_app/immutable/chunks/2g37R7Mr.js",
];
export const stylesheets = [];
export const fonts = [];
