const path = require('path')
//const tailwindcss = require('tailwindcss')

module.exports = {
    entry: './js/app.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname),
        filename: './public/js/_bundle.js'
    },
    module: {
        rules: [
            {test: /\.s[ac]ss$/i,
             use: ['style-loader', 'css-loader', 'sass-loader',
                 {loader: 'postcss-loader',
                  options: {
                      postcssOptions: {
                          plugins: ['postcss-preset-env', /*tailwindcss*/]
                      }
                  }}]},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i,
             type: 'asset/resource'},
        ]
    }
}
