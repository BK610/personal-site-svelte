export const index = 1;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/fallbacks/error.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/1.BJGSPC7b.js",
  "_app/immutable/chunks/BwuXgrL6.js",
  "_app/immutable/chunks/PUWf84Ah.js",
  "_app/immutable/chunks/DH-PflIw.js",
  "_app/immutable/chunks/CcYKbvd6.js",
  "_app/immutable/chunks/B0IYIc1v.js",
  "_app/immutable/chunks/CU95D5Fw.js",
];
export const stylesheets = [];
export const fonts = [];
