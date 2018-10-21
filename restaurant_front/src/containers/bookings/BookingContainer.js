import React, {Component} from 'react';
import BookingList from './BookingList';

class BookingContainer extends Component {

  constructor(props){
    super(props);
    this.state = {bookings: []}
    // this.url = props.url;
  }

  componentDidMount(){
      fetch('/bookings')
      .then((res) => res.json())
      .then((data) => {
        this.setState({bookings: data._embedded.bookings})
      })
    }

  // componentDidMount(){
  //     fetch(this.url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if(data._embedded){
  //       this.setState({bookings: data._embedded.bookings})
  //     } else {
  //       this.setState({bookings: [data]})
  //     }
  //     })
  //   }


  render() {
    // console.log(this.state.bookings);
    return (
      <BookingList bookings={this.state.bookings}/>
    )
  }

}

export default BookingContainer;
