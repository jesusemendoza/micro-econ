import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import PPF from './ppf'

class App extends Component {
  render() {
    return (
        <Fragment>
            <BrowserRouter>
            <Route exact path="/" component={PPF}/>
            </BrowserRouter>
        </Fragment>
    );
  }
}

export default App;
