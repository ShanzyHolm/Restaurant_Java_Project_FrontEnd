import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
import HomeComponent from './components/HomeComponent';
import CustomerContainer from './containers/customers/CustomerContainer';
import BookingContainer from './containers/bookings/BookingContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={HomeComponent}/>


            <Route exact path="/customers" render={() => {
              const url = "/customers";
              return <CustomerContainer url={url}/>
            }}/>
            <Route exact path="/customers/:id" render={(props) => {
              const url = "/customers/" + props.match.params.id + "?projection=embedBookings"
              return <CustomerContainer url={url}/>
            }}/>
            <Route exact path="." />

            <Route exact path="/bookings" component={BookingContainer}/>

            {/* <Route exact path="/bookings/:id" render={(props) => {
              const url = "/bookings/" + props.match.params.id + "?projection=embedBooking"
              return <BookingContainer url={url}/>
            }}/> */}
            {/* <Route exact path="." component=/> */}

            <Route exact path="." />

          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;


  // <Route exact path="/customers" component={CustomerContainer}/>
