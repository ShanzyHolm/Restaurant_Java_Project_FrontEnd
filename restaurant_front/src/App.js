import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import CustomerContainer from './containers/customers/CustomerContainer';
import BookingContainer from './containers/bookings/BookingContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar/>
          <Switch>
            <Route exact path="/"/>
            <Route exact path="/customers" component={CustomerContainer}/>
            <Route exact path="/bookings" component={BookingContainer}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
