import React from 'react';
import moment from 'moment';
import Booking from '../../components/bookings/Booking.js';

const BookingList = (props) => {

  const filteredFormattedDate = moment(props.searchDate).format("DD-MM-YY")

  const allBookings = props.bookings.map((booking) => {
    return (<li key={booking.id} className="booking-component-item">
      <Booking booking={booking} />
    </li>
  )
  })

  const selectedBooking = allBookings.filter((booking) => {
    const filteredBooking = moment(booking.date).format("DD-MM-YY");
    if (filteredBooking === filteredFormattedDate){
      return <Booking booking={booking} key={booking.id} />
    }

  })

  return (
    <ul className="booking-component-list">
      {selectedBooking}
    </ul>
  )
}

export default BookingList;
