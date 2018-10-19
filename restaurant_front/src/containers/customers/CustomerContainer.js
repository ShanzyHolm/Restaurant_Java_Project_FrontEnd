import React, {Component} from 'react';

class CustomerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {customers: []}
  }

  render() {
    return (
      <p>Hello Customer</p>
      // <CustomerList customers={this.state.customers}/>
    )
  }

}

export default CustomerContainer;
