import React from 'react';

const Customer = (props) => {

  return (
    <div>
      <p>
        Name: {props.customer.name}
      </p>
      <p>
        Phone Number: {props.customers.phone}
      </p>
    </div>
  )
}

export default Customer;
