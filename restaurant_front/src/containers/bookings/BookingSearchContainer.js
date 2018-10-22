import React, {Component} from 'react';

class BookingSearchContainer extends Component{

  constructor(props){
    super(props);
    this.state = []
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



// RESEARCH TO TRY AND SOLVE SORT BY DATE

// orderByDate(arr, dateProp) {
//   return arr.slice().sort(function (a, b) {
//     return a[dateProp] < b[dateProp] ? -1 : 1;
//   });
// }

// https://stackoverflow.com/questions/16690035/sort-date-in-javascript
// https://stackoverflow.com/questions/36943900/sorting-and-filtering-on-date
// https://stackoverflow.com/questions/10123953/sort-javascript-object-array-by-date
// https://stackoverflow.com/questions/10123953/sort-javascript-object-array-by-date
// https://www.youtube.com/watch?v=uBoZpm4eYL8
// https://www.ag-grid.com/javascript-grid-filter-date/
// https://www.syncfusion.com/forums/134467/date-range-filter-on-column
// https://momentjs.com/docs/#/customization/calendar/
