const path = require('path');

// if you want to use webpack instead of esbuild  fix path at package.json
module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    clean: true
  },
  resolve: {
    extensions: ['js', '.ts', '.tsx']
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [

      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },

    ]
  }
}