const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.css'],
    alias: {
      '@actions': path.resolve(__dirname, './client/src/actions'),
      '@components': path.resolve(__dirname, './client/src/components'),
      '@config': path.resolve(__dirname, './client/src/config'),
      '@helpers': path.resolve(__dirname, './client/src/helpers'),
      '@reducers': path.resolve(__dirname, './client/src/reducers'),
      '@utils': path.resolve(__dirname, './client/src/utils'),
      '@validations': path.resolve(__dirname, './client/src/validations'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      }
    ]
  },
}
