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
Create a Aync component by using the following code

```javascript
import React, { PureComponent } from 'react';
import LoadingIndicator from 'commons/ui/components/LoadingIndicator';

export default class  extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    if(!this.state.Component) {
      this.props.moduleProvider().then( ({Component}) => this.setState({ Component }));
    }
  }

  render() {
    const { Component } = this.state;

    //The magic happens here!
    return (
      <div>
        {Component ? <Component /> : <LoadingIndicator />}
      </div>
    );
  }
};



```


### License
This project is under the MIT license