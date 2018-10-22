import React from 'react';
import moment from 'moment';

const Booking = (props) => {

  let date = new Date(props.booking.date);
  let formattedDate = moment(date).format("DD/MM/YY HH:mm");

  // const url = "/bookings/" + props.booking.id
  return (
    <div className="booking-component">
      {/* <a href={url}> */}
      <h2>{props.booking.id} {formattedDate}</h2>
      {/* </a> */}
    </div>
  )
}

export default Booking;
