var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./assets/app.js",
    output: {
        path: __dirname,
        filename: "assets/dist/app.js"
    },
    module: {
        loaders: [
          {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            }
          },
          {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin("assets/dist/app.css")
    ]
};
