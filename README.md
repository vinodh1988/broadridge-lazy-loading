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

# Component imports

Import the components using the following code

```javascript

const home = () => import(/* webpackChunkName: "home" */ './modules/home/index');
const projects = () => import(/* webpackChunkName: "projects" */ './modules/projects/index');
const contact = () => import(/* webpackChunkName: "contact" */ './modules/contact/index');

```

And Call the Async Component in the following way in the route configuration

```javascript

 <Router>
    <AppTemplate>
      <Route path={basePath``} exact={true} component={() => <AsyncComponent moduleProvider={home} />} />
      <Route path={basePath`projects`} exact={true} component={() => <AsyncComponent moduleProvider={projects} />} />
      <Route path={basePath`contact`} exact={true} component={() => <AsyncComponent moduleProvider={contact} />} />
    </AppTemplate>
   </Router>

```

Run 

> npm run dev

To find chunks for each module created 

![alt text](https://vinodh-images.s3.ap-south-1.amazonaws.com/projectimages/build.JPG)


When you load the the home page only the home chunk is loaded


![alt text](https://vinodh-images.s3.ap-south-1.amazonaws.com/projectimages/homechunck.JPG)

And When you click project link and then only project chunk js is loaded


![alt text](https://vinodh-images.s3.ap-south-1.amazonaws.com/projectimages/projectchunk.JPG)

