const fs = require('fs')
const path = require('path')
const ESlintPlugin = require('eslint-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const entrys = {}
const algs4Path = path.resolve(__dirname, 'src/algs4')

function readFileDir(filePath) {
  const files = fs.readdirSync(filePath)
  for (const fileName of files) {
    const fileDir = path.join(filePath, fileName)
    const stats = fs.statSync(fileDir)
    if (stats.isFile()) {
      if (/\.[tj]s$/.test(fileName)) {
        const key = fileName.match(/(^[\w-]{1,})(?=\.[tj]s)/ig)
        key && key.length && (entrys[key[0]] = fileDir)
      }
    }
    if (stats.isDirectory()) {
      readFileDir(fileDir)
    }
  }
}
readFileDir(algs4Path)

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    index: './src/index.ts',
    ...entrys
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      mock: path.resolve(__dirname, 'src/mock/')
    },
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESlintPlugin({
      files: ['src/**/*.ts', 'src/**/*.js']
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
