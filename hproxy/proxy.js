// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');

/// xss input validater for cross-site input validation
var xss = require("xss");


var rewriteFn = function (path, req) {
    //// xss applied after replacing with search
    return xss(path.replace('/', '/search?q='));
}

// proxy middleware options
var options = {
        target: 'https://google.com', // target host
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true ,                         // proxy websockets
        pathRewrite: rewriteFn
    };

// create the proxy (without context)
var hProxy = proxy(options);

var app = express();
    app.use('/', hProxy);
    app.listen(8080);
