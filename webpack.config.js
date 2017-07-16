module.exports = {
  entry:[
      './src/index.js'
  ],
  output:{
    path: __dirname,
    filename: 'app/js/main.js'
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets:['es2015','stage-2','react']
        }
      }
    ]
  }
}
