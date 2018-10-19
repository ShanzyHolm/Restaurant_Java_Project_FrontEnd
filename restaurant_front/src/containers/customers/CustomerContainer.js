import React, {Component} from 'react';
import CustomerList from './CustomerList';

class CustomerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {customers: []}

    this.sortCustomersByBookingCountDesc = this.sortCustomersByBookingCountDesc.bind(this);
    this.sortCustomersByBookingCountAsc = this.sortCustomersByBookingCountAsc.bind(this);
  }

  componentDidMount(){
      fetch('/customers')
      .then((res) => res.json())
      .then((data) => {
        this.setState({customers: data._embedded.customers})
      })

    }

    sortCustomersByBookingCountDesc(){
    const orderedCustomers =  this.state.customers.sort(function(a, b){
        return b.bookings.length - a.bookings.length});
        this.setState({customers: orderedCustomers});
      }

      sortCustomersByBookingCountAsc(){
      const orderedCustomers =  this.state.customers.sort(function(a, b){
          return a.bookings.length - b.bookings.length});
          this.setState({customers: orderedCustomers});
        }


  render() {
    return (
      <div>
      <button onClick={this.sortCustomersByBookingCountDesc}>Sort By No. of Bookings (desc)</button>
      <button onClick={this.sortCustomersByBookingCountAsc}>Sort By No. of Bookings (asc)</button>
      <CustomerList customers={this.state.customers}/>
    </div>
    )
  }

}

export default CustomerContainer;
