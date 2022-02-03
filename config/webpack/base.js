const paths = require('../paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //Where files should be sent once they are bundled
  output: {    
    filename: 'js/[name].bundle.js',
    path: paths.dist,
    publicPath: '/',
    clean: true,
    // module: true,
  },
  //Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      // JavaScript, React
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      // CSS, PostCSS, Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // HTML
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: `${paths.src}/index.html`,
      filename: 'index.html',
      templateParameters: {        
        author: 'Buryak Evgeniy',
      }
    }), 
  ],
}