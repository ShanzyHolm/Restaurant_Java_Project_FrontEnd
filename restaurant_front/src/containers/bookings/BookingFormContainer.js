import React, {Component} from 'react';

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
        <div className="bookingForm">
          <form className="bookingForm" onSubmit={this.handleSubmit}>
            <label for="date">Select Date & Time:</label>
            <input id="date" type="datetime-local" name="time_stamp"  required/>

            <select default="Select Customer" name="customer" id="customer">
              <option value="" disabled selected required>Select Customer</option>
              {customerOptions}
            </select>
            <select name="table" id="table">
              <option value="" disabled selected required>Select Table</option>
              {tableOptions}
            </select>

            <button className="submit" type="submit">Save</button>
          </form>
        </div>
          <img className="cutlery" src="/images/cutlery.jpg" alt=""/>
      </div>
    )
  }


}

export default BookingFormContainer;
