import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home  from './components/home/home';
import Navbar from "./components/layout/navbar/navbar";
import TicketDetail from "./components/tickets/ticket-detail/ticket-detail";
import SignIn from './components/auth/signIn'
import CreateTicket from "./components/tickets/create-ticket/create-ticket";

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
              <Route exact path='/' component={Home} />
              <Route path='/ticket/:id' component={TicketDetail} />
              <Route path='/signin' component={SignIn} />
              <Route path='/create' component={CreateTicket} />
          </Switch>
      </>
  )
}

export default App;
