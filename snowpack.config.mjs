/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    "_site": {
      url: "/",
      static: true,
    },
    "src/assets": "/assets",
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "echo build!", // production build command
        watch: "npx eleventy --watch --incremental", // (optional) dev server command
      },
    ],
    [
      "@snowpack/plugin-sass",
      {
        // native: true,
        compilerOptions: {
          style: "expanded", // compressed
        },
      },
    ],
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-typescript",
    // [
    //   "@snowpack/plugin-webpack",
    //   {
    //     extendConfig: {
    //       resolve: {
    //         extensions: [".ts", ".js"],
    //       },
    //     },
    //   },
    // ],
  ],
  optimize: {
    bundle: false,
    minify: true,
    target: 'es2015',
    // sourcemap: false,
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    // Eleventy updates multiple files at once, so add a 300ms delay before we trigger a browser update
    hmrDelay: 300,
  },
  buildOptions: {
    out: "dist",
    baseUrl: "./",
    htmlFragments: true,
  },
};
