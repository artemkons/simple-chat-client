import path from 'path';
import webpack from 'webpack';

export default (env: any): webpack.Configuration => {
  return {
    mode: env.develompent ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true
    },
    module: {
      rules: [
        { test: /\.(ts|tsx)$/, loader: "ts-loader" }
      ]
    }
  }
};
