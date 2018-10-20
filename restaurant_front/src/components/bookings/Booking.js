import React from 'react';

const Booking = (props) => {

  const url = "/bookings/" + props.booking.id
  return (
    <div className="booking-component">
      <a href={url}>
        <h2>{props.booking.id} {props.booking.date}</h2>
      </a>
    </div>
  )
}

export default Booking;
