
module.exports = {
  entry: './src/index.js',
  devtool: '#inline-source-map',

  output: {
    path: __dirname + '/script/',
    filename: 'portfolioScript.js',
  },

  devServer: {
    inline: true,
    port: 8080,
    contentBase: __dirname + '/public/',
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
