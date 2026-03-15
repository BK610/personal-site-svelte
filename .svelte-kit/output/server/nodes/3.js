export const index = 3;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/demo/_page.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/3.Dypyg-tj.js",
  "_app/immutable/chunks/BwuXgrL6.js",
  "_app/immutable/chunks/PUWf84Ah.js",
  "_app/immutable/chunks/DYJXOdPT.js",
  "_app/immutable/chunks/DQ9W_XTn.js",
  "_app/immutable/chunks/B0IYIc1v.js",
];
export const stylesheets = [];
export const fonts = [];
