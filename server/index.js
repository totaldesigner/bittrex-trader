'use strict';
const express = require('express');
const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const ip = require('ip');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) ? require('ngrok') : false;
const resolve = require('path').resolve;
const logger = require('./utils/logger');
const setup = require('./middlewares/frontendMiddleware');

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const port = argv.port || process.env.PORT || 3000;

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
