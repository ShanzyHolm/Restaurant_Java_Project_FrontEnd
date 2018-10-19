import React from 'react';
import {Link} from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';

const NavBar = () => {
  return (
    <header className="navBar">
      <div>
        {/* <h1 className="title">Cafe 503</h1> */}
        <img src="/images/Cafe503Logo.jpg" alt="CafeLogo" className="logo" rounded/>
      </div>
      <ul>
        <li className="navLink">
          <Link to="/customers">View All Customers</Link>
        </li>
        <li className="navLink">
          <Link to="/bookings">View All Bookings</Link>
        </li>
        {/* <li className="navLink">
          <Link to="/ships">Ships</Link>
        </li> */}
      </ul>

    </header>
  )

}

export default NavBar;
