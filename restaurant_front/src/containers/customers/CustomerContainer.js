import React, {Component} from 'react';
import CustomerList from './CustomerList';

class CustomerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {customers: []}
  }

  componentDidMount(){
      fetch('/customers')
      .then((res) => res.json())
      .then((data) => {
        this.setState({customers: data._embedded.customers})
      })
    }

  render() {
    console.log(this.state.customers);
    return (
      <CustomerList customers={this.state.customers}/>
    )
  }

}

export default CustomerContainer;
