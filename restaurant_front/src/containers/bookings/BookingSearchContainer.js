import React, {Component} from 'react';

class BookingSearchContainer extends Component{

  constructor(props){
    super(props);
    this.state = {customers: [], tables: []}
  }

  handleSubmit(event){
    event.preventDefault();
    fetch("/bookings", {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "date": event.target.date.value
      })
      .then(() => {
        array.sort(function(a, b) {
              a = new Date(a.date);
              b = new Date(b.date);
              return a>b ? -1 : a<b ? 1 : 0;
          });
      })
    })
    .then(() => {
      window.location="/bookings/date/";
    })
  }


  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="date">Search By Date: </label>
          <input id="date" type="date-local"  required/>

          <button type="submit">Search</button>
        </form>
      </div>
    )
  }


}

export default BookingSearchContainer;
