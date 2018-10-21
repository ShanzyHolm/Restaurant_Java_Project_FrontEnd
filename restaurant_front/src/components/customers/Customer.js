import React from 'react';

const Customer = (props) => {

  const url = "/customers/" + props.customer.id

  return (
    <div className="customer-component">
      <a href={url}>
        <p className="customer-name">
          ({props.customer.id}) <strong>Name: </strong>  {props.customer.name}
        </p>
      </a>
      <p className="customer-number">
        <strong>Phone Number: </strong> {props.customer.number}
      </p>
      {/* <p className="customer-bookings"><strong>Bookings:  </strong>{props.customer.bookings}</p> */}
    </div>
  )
}

export default Customer;
