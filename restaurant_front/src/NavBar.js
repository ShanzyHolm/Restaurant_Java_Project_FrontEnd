import React from 'react';
import {Link} from 'react-router-dom';
import { Button, ButtonToolbar, ButtonGroup, Navbar, Nav, NavItem, Image, DropdownButton, MenuItem, Grid, Row, Col } from 'react-bootstrap';

const NavBar = () => {
  return (

      <header className="navBar">

        <div>
          {/* <h1 className="title">Cafe 503</h1> */}
          <Image src="/images/Cafe503Logo.jpg" alt="CafeLogo" className="logo" rounded/>
        </div>

        <Grid className="header-grid">

          <Row className="row2">
            <ButtonToolbar className="buttons">

              <ButtonGroup className="home-button">
                <Button href="/" bsStyle="warning">Home</Button>
              </ButtonGroup>

              <DropdownButton className="customer-buttons" bsStyle="warning" title="Customers" id="dropdown-customers-menu">
                <MenuItem href="/customers" bsStyle="warning">View All Customers</MenuItem>
                <MenuItem href="." bsStyle="warning">Edit Customer</MenuItem>
              </DropdownButton>

              <DropdownButton className="booking-buttons" bsStyle="warning" title="Bookings" id="dropdown-bookings-menu">
                <MenuItem href="/bookings" bsStyle="warning">View All Bookings</MenuItem>
                <MenuItem href="." bsStyle="warning">Edit Booking</MenuItem>
              </DropdownButton>

            </ButtonToolbar>
          </Row>
          <Row className="row1">
            <h1>Welcome to Cafe 503!</h1>
          </Row>
          </Grid>

        </header>

  )

}

export default NavBar;
