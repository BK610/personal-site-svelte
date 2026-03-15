export const index = 4;
let component_cache;
export const component = async () =>
  (component_cache ??= (
    await import("../entries/pages/demo/playwright/_page.svelte.js")
  ).default);
export const imports = [
  "_app/immutable/nodes/4.DCuWAfWL.js",
  "_app/immutable/chunks/BwuXgrL6.js",
  "_app/immutable/chunks/PUWf84Ah.js",
];
export const stylesheets = [];
export const fonts = [];
