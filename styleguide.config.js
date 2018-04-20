const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const config = require('./styleguide/styleguide.config.json');

module.exports = {
  styleguideDir: 'public',
  ignore: [
    '**/src/index.js',
    '**/src/reducer/**',
    '**/theme/**',
    '**/reducer.js',
    '**/selectors.js',
    '**/actions.js',
    '**/constants.js',
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
  ],
  previewDelay: 500,
  skipComponentsWithoutExample: false,
  showCode: false,
  showUsage: true,
  showSidebar: true,
  styles: {},
  template: path.join(__dirname, 'styleguide/template.html'),
  theme: {},
  title: `${pkg.description || pkg.name} documentation`,
  verbose: false,
  webpackConfig: {
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        exclude: [
          'node_modules/**/*.js',
        ],
      }),
    ],
    resolve: {
      alias: {
        'bootstrap-styled-redux': path.resolve(__dirname),
      },
    },
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'styleguide'),
          ],
          loader: 'babel-loader',
        },
      ],
    },
  },
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'styleguide/components/LayoutRenderer'),
    Wrapper: path.join(__dirname, 'styleguide/components/Wrapper'),
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath);
    return `import ${name} from '${dir.replace(/^src\//, 'lib/')}';`;
  },
  ...config,
};
