const webpack = require('webpack');
module.exports = {

    plugins: [
        new webpack.ProvidePlugin({
            url: "url/",
            path : "path-browserify",
            util: "util/",
            stream: "stream-browserify",
            buffer: "buffer/",
            querystring: "querystring-es3",
            http: "stream-http",
            crypto: "crypto-browserify", 
            zlib: "browserify-zlib",
        })
      ]


    // resolve: {
    //     fallback: {




// process: require.resolve("url/"),
            // process: require.resolve("path-browserify"),
            // process: require.resolve("util/"),
            // process: require.resolve("stream-browserify"),
            // process: require.resolve("buffer/"),
            // process: require.resolve("querystring-es3"),
            // process: require.resolve("stream-http"),
            // process: require.resolve("crypto-browserify"),
            // process: require.resolve("browserify-zlib"),
            


        // }
        // ( process: require.resolve('process/browser') ),
        
    // },
}