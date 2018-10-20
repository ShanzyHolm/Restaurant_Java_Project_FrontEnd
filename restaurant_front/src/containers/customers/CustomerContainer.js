import React, {Component} from 'react';
import CustomerList from './CustomerList';

class CustomerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {customers: []}
    this.url = props.url;
  }

  componentDidMount(){
      fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        if(data._embedded){
        this.setState({customers: data._embedded.customers})
      } else {
        this.setState({customers: [data]})
      }
    })
  }

  render() {
    // console.log(this.state.customers);
    return (
      <CustomerList customers={this.state.customers}/>
    )
  }

}

export default CustomerContainer;


// componentDidMount(){
//     fetch('/customers')
//     .then((res) => res.json())
//     .then((data) => {
//       this.setState({customers: data._embedded.customers})
//     })
//   }
