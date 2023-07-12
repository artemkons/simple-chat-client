import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
};

export default config;
