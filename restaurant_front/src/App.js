import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CustomerContainer from './containers/customers/CustomerContainer';
// import CustomerFormContainer from './containers/customers/CustomerFormContainer';
import BookingContainer from './containers/bookings/BookingContainer';
// import BookingFormContainer from './containers/bookings/BookingFormContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Router.Fragment>
          {/* <NavBar/> */}
          <Switch>
            <Route exact path="/customers" component={CustomerContainer}/>
            <Route exact path="/bookings" component={BookingContainer}/>
          </Switch>
        </Router.Fragment>
      </Router>
    );
  }
}

export default App;



            //<Route exact path="/customers" render={() => {
            //   const url = "/customers";
            //   return <CustomerContainer url={url}/>
            // }}/>
