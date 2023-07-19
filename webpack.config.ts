import path from 'path'
import webpack from 'webpack'

import * as WebpackDevServer from 'webpack-dev-server'

import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (env: any): webpack.Configuration => {
  return {
    mode: env.develompent ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true
    },
    devtool: 'inline-source-map',
    plugins: [new HtmlWebpackPlugin({
      template: 'index.html'
    })],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 9000,
      client: {
        overlay: false,
      },
      proxy: {
        '/socket.io': {
          target: 'http://localhost:3001',
          ws: true
        }
      },
    },
    module: {
      rules: [
        { test: /\.(ts|tsx)$/, loader: "ts-loader" }
      ]
    }
  }
};
