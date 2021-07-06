/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    'src/_site': {
      url: '/',
      static: true,
    },
    'src/assets': '/assets',
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy', // production build command
        watch: 'eleventy --watch --incremental', // (optional) dev server command
      },
    ],
    [
      '@snowpack/plugin-sass',
      {
        // native: true,
        compilerOptions: {
          style: 'expanded', // compressed
        },
      },
    ],
    '@snowpack/plugin-postcss',
  ],
  // optimize: {
  //   bundle: false,
  //   // minify: false,
  //   // target: 'es2018',
  //   // sourcemap: false,
  // },
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    // Eleventy updates multiple files at once, so add a 300ms delay before we trigger a browser update
    // hmrDelay: 3000,
  },
  buildOptions: {
    out: 'dist',
    baseUrl: '/',
    htmlFragments: true
  },
};
