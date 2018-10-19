import React from 'react';
import {Link} from 'react-router-dom';
import { Button, ButtonToolbar, Navbar, Nav, NavItem } from 'react-bootstrap';

const NavBar = () => {
  return (
    <header className="navBar">
      <div>
        {/* <h1 className="title">Cafe 503</h1> */}
        <img src="/images/Cafe503Logo.jpg" alt="CafeLogo" className="logo" rounded/>
      </div>
      <ButtonToolbar >

        <Button to="/customers">View All Customers</Button>

        <Button to="/bookings">View All Bookings</Button>
        
      </ButtonToolbar>

    </header>
  )

}

export default NavBar;
