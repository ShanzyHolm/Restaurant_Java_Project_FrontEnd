import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import React from 'react';
import moment from 'moment';

const Booking = (props) => {

  const editUrl = "/bookings/" + props.booking.id + "/edit"
  const url = "/bookings/" + props.booking.id

  let date = new Date(props.booking.date);
  let formattedDate = moment.utc(date).format("DD/MM/YY HH:mm");

  const deleteBooking = function(event) {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>
          fetch(url, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
          })
          .then(() => {
            window.location="/bookings"
          })
          .catch(err => console.error(err))
        },
        {
          label: 'No',
          onClick: () => window.location="/bookings"
        }
      ]
    })

  }

  return (
    <div className="booking-component">
      <a href={editUrl}>
        <h4><strong>Booking Reference Number:</strong> {props.booking.id}</h4>
      </a>
      <h5><strong>Date:</strong> {formattedDate}</h5>
      <h5><strong>Customer Name:</strong> {props.booking.customer.name}</h5>
      <h5><strong>Table Booked:</strong> {props.booking.table.name}</h5>
      {/* <a href={editUrl}>Edit Booking</a> */}


      <button className="delete-button" onClick={deleteBooking}>Delete</button>

    </div>
  )
}

export default Booking;
