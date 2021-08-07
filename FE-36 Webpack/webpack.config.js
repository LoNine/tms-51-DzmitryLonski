const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin');

const htmlWebPlugin = new HtmlWebPlugin({
  title: 'Rick And Morty Characters',
});

module.exports = {
  entry: './index.js',
  plugins: [
    htmlWebPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle[contenthash].js',
    clean: true,
  },
};
