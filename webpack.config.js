const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// NOTE: Any change in this config file we need to restart the server
// No need to build everytime starting "webpack-dev-server" will implicitly do that
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    open: true // to open the url in your browser by default when the server is up
  },
  module: {
    rules: [
      {
        // test: /\.css$/i, // If you want to use only CSS instead of sass. We should avoid using plain "css"
        test: /\.scss$/i,
        use: [ // order matters
          'style-loader', // Step-3: Injects styles into DOM
          'css-loader',  // Step-2: Turns css to commonjs
          'sass-loader' // Step-1: Turns sass into css
        ]
      },
      {
        test: /\.html$/i,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // you can give any name here but as per docs we will give bundle.js
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
      // filename: 'any-name.html' // you can give output file here else it will use the same name
    })
  ]
}
