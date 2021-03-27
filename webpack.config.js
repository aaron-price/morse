var path = require('path')

module.exports = {
    entry: './js/app.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname),
        filename: './public/js/_bundle.js'
    }
}
