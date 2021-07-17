import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home  from './components/home/home';

const App = () => {
  return (
      <Switch>
          <Route path='/' component={Home} />
      </Switch>
  )
}

export default App;
