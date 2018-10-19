import React, {Component} from 'react';
import Customer from '../../component/customers/Customer.js';

const CustomerList = (props) => {

  const allCustomers = props.customers.map((customers) => {
    return (<li key={customers.id} className="customer-component-item">
      <Customer customer={customer} />
    </li>
  )
  })

  return (
    <ul className="customer-component-list">
      {allCustomers}
    </ul>
  )
}

export default CustomerList;
