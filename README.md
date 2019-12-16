# React Webpack Lazy Loading
## A sample of lazy loading using React and Webpack


### Objective
Do a feature based lazy loading using React components and Webpack

# Async Loading Setup

Adding the following property in webpack.config.js

```javascript
output: {
    path: resolve(__dirname, 'dist/'),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: process.env.NODE_ENV === 'development' ? "/dist/" : "/react-webpack-lazy-loading/dist/"
  }
```



### License
This project is under the MIT license