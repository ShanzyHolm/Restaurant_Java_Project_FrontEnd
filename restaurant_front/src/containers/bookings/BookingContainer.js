import React, {Component} from 'react';
import BookingList from './BookingList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class BookingContainer extends Component {

  constructor(props){
    super(props);
    this.state = {bookings: [], searchDate: moment()};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
      fetch('/bookings')
      .then((res) => res.json())
      .then((data) => {
        this.setState({bookings: data._embedded.bookings})
      })
    }

    handleChange(targetDate){
      this.setState({searchDate: targetDate})
    }


  render() {
    return (
      <div>
      <div>
        <DatePicker className="date-picker" selected={this.state.date} onChange={this.handleChange}/>
    </div>
          <BookingList bookings={this.state.bookings} searchDate={this.state.searchDate}/>
    </div>
    )
  }

}

export default BookingContainer;
