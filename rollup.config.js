/* eslint-disable flowtype-errors/show-errors, no-console, import/extensions */
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import inject from 'rollup-plugin-inject';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';
import cleanup from 'rollup-plugin-cleanup';
import visualizer from 'rollup-plugin-visualizer';
import builtins from 'rollup-plugin-node-builtins';
import pkg from './package.json';
import declination from './declination.json';
const processShim = '\0process-shim';
const prod = process.env.PRODUCTION;
const mode = prod ? 'production' : 'development';
const { external, globals } = declination;

console.log(`Creating ${mode} bundle...`);

const output = prod ? [
  {
    name: pkg.name, exports: 'named', globals, file: `dist/${pkg.name}.min.js`, format: 'umd', sourcemap: true,
  },
] : [
  {
    name: pkg.name, exports: 'named', globals, file: `dist/${pkg.name}.js`, format: 'umd', sourcemap: true,
  },
  {
    name: pkg.name, exports: 'named', globals, file: `dist/${pkg.name}.es.js`, format: 'es', sourcemap: true,
  },
];

const plugins = [
  // Unlike Webpack and Browserify, Rollup doesn't automatically shim Node
  // builtins like `process`. This ad-hoc plugin creates a 'virtual module'
  // which includes a shim containing just the parts the bundle needs.
  {
    resolveId(importee) {
      if (importee === processShim) return importee;
      return null;
    },
    load(id) {
      if (id === processShim) return 'export default { argv: [], env: {} }';
      return null;
    },
  },
  builtins(),
  nodeResolve({
    browser: true,
  }),
  commonjs({
    include: 'node_modules/**',
    namedExports: {
      'react-intl': ['injectIntl', 'intlShape', 'IntlProvider', 'FormattedMessage', 'defineMessages'],
    },
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
  }),
  inject({
    process: processShim,
  }),
  json(),
  babel({
    babelrc: false,
    exclude: 'node_modules/**',
  }),
  cleanup(),
];

if (prod) plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }));

export default {
  input: 'src/index.js',
  external,
  output,
  plugins,
};