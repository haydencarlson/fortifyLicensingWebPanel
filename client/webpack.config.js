const path = require('path');
module.exports = {
  entry: [
    './app/Index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/, 
        loaders: [
          'style-loader',
          'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ],
        exclude: '/app/assets/'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
