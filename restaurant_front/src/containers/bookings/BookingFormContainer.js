import React, {Component} from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, FieldGroup } from 'react-bootstrap';

class BookingFormContainer extends Component{

  constructor(props){
    super(props);
    this.state = {customers: [], tables: []}
  }

  componentDidMount(){
    fetch('/customers')
    .then((res) => res.json())
    .then((data) => {
      this.setState({customers: data._embedded.customers})
    })

    fetch('/tables')
    .then((res) => res.json())
    .then((data) => {
      this.setState({tables: data._embedded.tables})
    })
  }

  handleSubmit(event){
    event.preventDefault();
    fetch("/bookings", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "customer": event.target.customer.value,
        "table": event.target.table.value,
        "date": event.target.date.value
      })
    })
    .then(() => {
      window.location="/bookings";
    })
  }


  render(){


    const customerOptions = this.state.customers.map((customer, index) => {
      return <option key={index} value={customer._links.self.href}>{customer.name}</option>
    })

    const tableOptions = this.state.tables.map((table, index) => {
      return <option key={index} value={table._links.self.href}>{table.name}</option>
    })

    return(
      <div className="bookingFormContainer">
        <Form horizontal onSubmit={this.handleSubmit}>

          <FormGroup bsSize="large" controlId="bookingForm">
            <Col className="font" componentClass={ControlLabel} smOffset={1} sm={4}> {' '}
              <strong className="font"for="date">Select Date & Time </strong>
            </Col>
            <Col sm={4}> {' '}
              <FormControl className="date" id="date" type="datetime-local" name="time_stamp"  required/>
            </Col>
          </FormGroup>

          <FormGroup bsSize="large" controlId="bookingForm">
            <Col className="font" componentClass={ControlLabel} smOffset={1} sm={4}> {' '}
              <strong className="font">Select Customer: </strong>
            </Col>
            <Col className="select" default="Select Customer" name="customer" id="customer" sm={4}> {' '}
              <FormControl componentClass="select" placeholder="select">
                <option value="" disabled selected required>Select Customer</option>
                {customerOptions}
              </FormControl>
            </Col>
          </FormGroup>{' '}

          <FormGroup bsSize="large" controlId="bookingForm">
            <Col className="font" componentClass={ControlLabel} smOffset={1} sm={4}> {' '}
              <strong className="font">Select Table: </strong>
            </Col>
            <Col className="select" default="Select Table" name="table" id="table" sm={4}>
              <FormControl componentClass="select" placeholder="select">
                <option value="" disabled selected required>Select Table</option>
                {tableOptions}
              </FormControl>
            </Col>
          </FormGroup>{' '}

          <FormGroup>
            <Col smOffset={5} sm={5}>
              <Button className="submit" type="submit">Save</Button>
            </Col>
          </FormGroup>
        </Form>
        <img className="cutlery" src="/images/cutlery.jpg" alt=""/>
      </div>

    )
  }


}

export default BookingFormContainer;
