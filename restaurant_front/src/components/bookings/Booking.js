import React from 'react';
import moment from 'moment';

const Booking = (props) => {

  const editUrl = "/bookings/" + props.booking.id + "/edit"
  // const url = "/bookings/" + props.booking.id

  let date = new Date(props.booking.date);
  let formattedDate = moment(date).format("DD/MM/YY HH:mm");

  return (
    <div className="booking-component">
      {/* <a href={url}> */}
        <h4><strong>Booking Reference Number:</strong> {props.booking.id}</h4>
        <h5><strong>Date:</strong> {formattedDate}</h5>
        <h5><strong>Customer Name:</strong> {props.booking.customer.name}</h5>
        <h5><strong>Table Booked:</strong> {props.booking.table.name}</h5>
        <a href={editUrl}>Edit Booking</a>
    </div>
  )
}

export default Booking;
