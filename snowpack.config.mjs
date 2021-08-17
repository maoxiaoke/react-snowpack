/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  packageOptions: {
    source: 'remote',
    origin: 'https://pkg.snowpack.dev',
    types: true,
  },
};
