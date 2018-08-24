// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');

/// xss input validater for cross-site input validation
var xss = require("xss");

/// google-caja for output validation
var respSanitizer = require('google-caja-sanitizer').sanitize;

var rewriteFn = function (path, req) {
    //// xss applied after replacing with search 
    return xss(path.replace('/', '/search?q='));
}

var filterRespFn = function (proxyRes, req, res) {
    /// Apply output validation on response received
    proxyRes.body = respSanitizer(proxyRes.body);
    console.log("Filtered output applied");
}

// proxy middleware options
var options = {
        target: 'https://google.com', // target host
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true,                         // proxy websockets
        pathRewrite: rewriteFn,
        onProxyRes: filterRespFn
    };

// create the proxy (without context)
var hProxy = proxy(options);

var app = express();
    app.use('/', hProxy);
    app.listen(8080);
