import React, {Component} from 'react';

class BookingContainer extends Component {

  constructors(props){
    super(props);
    this.state = {bookings: []}
    this.url = props.url;
  }

  componentDidMount(){
      fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        if(data._embedded){
        this.setState({bookings: data._embedded.bookings})
      } else {
        this.setState({bookings: [data]})
      }
      })

    }

  render() {
    return (
      <BookingList bookings={this.state.bookings}/>
    )
  }

}

export default BookingsContainer;
