import React from 'react';
import Booking from '../../components/bookings/Booking.js';

const BookingList = (props) => {

  const allBookings = props.bookings.map((booking) => {
    return (<li key={booking.id} className="booking-component-item">
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
