export const index = 2;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_page.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/2.CfCpUlD2.js",
  "_app/immutable/chunks/BwuXgrL6.js",
  "_app/immutable/chunks/PUWf84Ah.js",
];
export const stylesheets = [];
export const fonts = [];
