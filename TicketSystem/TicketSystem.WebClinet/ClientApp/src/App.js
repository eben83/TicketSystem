import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home  from './components/home/home';
import Navbar from "./components/layout/navbar/navbar";

import './custom.xs.css'
import './custom.sm.css'
import './custom.md.css'
import './custom.lg.css'
import './custom.xl.css'

const App = () => {
  return (
      <>
          <Navbar />
          <Switch>
              <Route path='/' component={Home} />
          </Switch>
      </>
  )
}

export default App;
