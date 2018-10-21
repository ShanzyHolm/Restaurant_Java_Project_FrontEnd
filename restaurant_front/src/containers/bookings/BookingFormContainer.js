import React, {Component} from 'react';

class BookingFormContainer extends Component{

  constructor(props){
    super(props);
    this.state = {customers: [], tables: []}
  }

  componentDidMount(){
   fetch('/customers')
   .then((res) => res.json())
   .then((data) => {
     this.setState({customers: data._embedded.customers})
   })

   fetch('/tables')
   .then((res) => res.json())
   .then((data) => {
     this.setState({tables: data._embedded.tables})
   })
 }



 handleSubmit(event){
   event.preventDefault();
   fetch("/bookings", {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       "customer": event.target.customer.value,
       "table": event.target.table.value,
     })
   })
   .then(() => {
     window.location="/customers";
   })

 }


 render(){

   const customerOptions = this.state.customers.map((customer, index) => {
     return <option key={index} value={customer._links.self.href}>{customer.name}</option>
   })
   const tableOptions = this.state.tables.map((table, index) => {
     return <option key={index} value={table._links.self.href}>{table.name}</option>
   })

   return(
   <div>
       <form onSubmit={this.handleSubmit}>

<select default="Select Customer" name="customer" id="customer">
  <option value="" disabled selected>Select Customer</option>
  {customerOptions}
</select>
<select name="table" id="table">
  {tableOptions}
</select>

         <button type="submit">Save</button>
       </form>
     </div>
   )
 }


}

export default BookingFormContainer;
