import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import basePath from 'commons/utils/basePath';

export default ({children}) => (
  <div className="flex-container">
    <nav>
      <Link to={basePath``} >Home</Link>
      <Link to={basePath`projects`}>Projects</Link>
      <Link to={basePath`contact`} >Contact</Link>
    </nav>
    <div className="container">
      <div className="card">
        <h1>Component is loaded</h1>
        {children}
      </div>
    </div>
    <hr/>
    <footer style={{textAlign: "center"}}>
      <b>Lazy Routing Demo</b>
    </footer>
  </div>
);