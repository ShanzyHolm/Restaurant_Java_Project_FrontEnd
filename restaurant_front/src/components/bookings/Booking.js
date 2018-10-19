import React from 'react';

const Booking = (props) => {
  return (
    <div>
      <h2>{props.booking.id} {props.booking.date}</h2>
    </div>
  )
}

export default Booking;
