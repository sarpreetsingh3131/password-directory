var path = require('path')

var DIST_DIR = path.resolve(__dirname, 'dist')
var SRC_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: SRC_DIR + '/app/app.jsx',
  output: {
    filename: 'build.js',
    path: DIST_DIR
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 4000,
    public: 'localhost:4000'
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2017',
            'stage-2'
          ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
