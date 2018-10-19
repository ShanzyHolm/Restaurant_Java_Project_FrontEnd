import React, {Component} from 'react';
import BookingList from './BookingList';

class BookingContainer extends Component {

  constructor(props){
    super(props);
    this.state = {bookings: []}

  }

  componentDidMount(){
      fetch('/bookings')
      .then((res) => res.json())
      .then((data) => {
        this.setState({bookings: data._embedded.bookings})
      })
    }


  render() {
    console.log(this.state.bookings);
    return (

      // <p>hello booking</p>
      <BookingList bookings={this.state.bookings}/>
    )
  }

}

export default BookingContainer;
