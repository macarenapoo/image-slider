const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dashboard = require('webpack-dashboard/plugin');

const devPort = 9191;

const config = {
  entry: {
    bundle: [path.resolve(__dirname, 'src', 'index.tsx')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    sourceMapFilename: 'bundle.js.map'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: ['react-hot-loader/babel']
            }
          },
          'ts-loader'
        ]
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'src')],
        loaders: ['svg-inline-loader']
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.ts', '.tsx', '.js', '.css'],
    alias: {
      'rc-slider-css': path.join(
        __dirname,
        '../node_modules/rc-slider/assets/index.css'
      ),
      'babel-core': path.resolve(
        // TODO Tavis: can this be removed?
        path.join(__dirname, './node_modules/@babel/core')
      )
    }
  },
  devtool: 'source-map',
  target: 'web',
  stats: 'verbose',

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.DefinePlugin({
      'process.env.VERSION': "'v" + require('./package.json').version + "'"
    })
  ],

  devServer: {
    port: devPort,
    hot: true,
    hotOnly: true,
    publicPath: '/',
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'eval';
  config.output.publicPath = config.devServer.publicPath = `http://localhost:${devPort}/`;

  config.entry.bundle = ['react-hot-loader/patch'].concat(config.entry.bundle);

  config.plugins = config.plugins.concat([
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    new Dashboard()
  ]);
}

module.exports = config;
