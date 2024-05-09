const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./app/components/widget.js'],  // Adjusted path to reflect your project structure
  output: {
    path: path.resolve(__dirname, 'public/widget'),
    filename: 'widget-bundle.js',
    library: 'SpecialsWidget',
    libraryTarget: 'umd',
    publicPath: '/widget/',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'corvettetest.html',
      template: './app/components/corvettetest.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
