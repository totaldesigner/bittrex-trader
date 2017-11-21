'use strict';

const path = require('path');
const webpack = require('webpack');
const metas = require(path.resolve(process.cwd(), 'meta.json'));

// plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const minify = {
  collapseWhitespace: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
};

const htmlWebpackPlugins = metas.map((meta) => {
  return new HtmlWebpackPlugin(Object.assign({
    inject: true,
    minify,
    template: 'app/index.ejs',
  }, meta));
});

module.exports = require('./webpack.base')({
  entry: {
    main: [
      'es6-collections',
      'es6-promise/auto',
      'location-origin',
      'object-assign-mdn',
      path.join(process.cwd(), 'app/index.tsx'),
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
    ],
  },
  output: {
    chunkFilename: '[name].[chunkhash].chunk.js',
    filename: '[name].[chunkhash].js',
  },
  loaders: [
    // .ts, .tsx
    {
      test: /\.tsx?$/,
      loader: ['awesome-typescript-loader'],
    },
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unused: true,
      },
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),

    new CopyWebpackPlugin([
      // { context: 'app', from: 'images/papago_og.png', to: 'images'},
      {context: 'app', from: 'static', to: 'static'},
    ]),

    // Minify and optimize the index.html
  ].concat(htmlWebpackPlugins),

  performance: {
    assetFilter: (assetFilename) => {
      return !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename));
    },
  },
});
