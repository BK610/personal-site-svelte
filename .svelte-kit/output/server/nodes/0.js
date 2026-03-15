export const index = 0;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_layout.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/0.BagBPZu5.js",
  "_app/immutable/chunks/BwuXgrL6.js",
  "_app/immutable/chunks/PUWf84Ah.js",
  "_app/immutable/chunks/CXQ1_rKg.js",
  "_app/immutable/chunks/DYJXOdPT.js",
];
export const stylesheets = [];
export const fonts = [];
