const   webpack     = require('webpack'),
        path        = require('path');

module.exports = {
    entry: './app/assets/scripts/script.js',
    output: {
        path: __dirname + "/app/temp/scripts",
        filename: 'app.js'
    },
    module: {
        rules: [
            {                
                test: /\.js$/,
                exclude: path.join(__dirname, '/(node_modules)/'),
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                }]
            }
        ]
    }
}