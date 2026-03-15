export const manifest = (() => {
  function __memo(fn) {
    let value;
    return () => (value ??= value = fn());
  }

  return {
    appDir: "_app",
    appPath: "_app",
    assets: new Set(["robots.txt"]),
    mimeTypes: { ".txt": "text/plain" },
    _: {
      client: {
        start: "_app/immutable/entry/start.C5v8Oy99.js",
        app: "_app/immutable/entry/app.BmqZfB87.js",
        imports: [
          "_app/immutable/entry/start.C5v8Oy99.js",
          "_app/immutable/chunks/CU95D5Fw.js",
          "_app/immutable/chunks/PUWf84Ah.js",
          "_app/immutable/chunks/CcYKbvd6.js",
          "_app/immutable/chunks/B0IYIc1v.js",
          "_app/immutable/entry/app.BmqZfB87.js",
          "_app/immutable/chunks/PUWf84Ah.js",
          "_app/immutable/chunks/DH-PflIw.js",
          "_app/immutable/chunks/BwuXgrL6.js",
          "_app/immutable/chunks/B0IYIc1v.js",
          "_app/immutable/chunks/CXQ1_rKg.js",
        ],
        stylesheets: [],
        fonts: [],
        uses_env_dynamic_public: false,
      },
      nodes: [
        __memo(() => import("../output/server/nodes/0.js")),
        __memo(() => import("../output/server/nodes/1.js")),
        __memo(() => import("../output/server/nodes/2.js")),
        __memo(() => import("../output/server/nodes/3.js")),
        __memo(() => import("../output/server/nodes/4.js")),
      ],
      remotes: {},
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null,
        },
        {
          id: "/demo",
          pattern: /^\/demo\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null,
        },
        {
          id: "/demo/playwright",
          pattern: /^\/demo\/playwright\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null,
        },
      ],
      prerendered_routes: new Set([]),
      matchers: async () => {
        return {};
      },
      server_assets: {},
    },
  };
})();

export const prerendered = new Set([]);

export const base_path = "";
