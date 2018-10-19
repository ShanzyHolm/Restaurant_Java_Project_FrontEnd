import React, {Component} from 'react';
import Booking from '../../component/bookings/Booking.js';

const BookingList = (props) => {

  const allBookings = props.bookings.map((bookings) => {
    return (<li key={bookings.id} className="booking-component-item">
      <Booking booking={booking} />
    </li>
  )
  })

  return (
    <ul className="booking-component-list">
      {allBookings}
    </ul>
  )
}

export default BookingList;
