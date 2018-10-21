import React, { Component } from 'react';

class CustFormContainer extends Component {
 // constructor(props){
 //   super(props);
 //   this.state = {ships: []}
 }

 // componentDidMount(){
 //   fetch('/ships')
 //   .then((res) => res.json())
 //   .then((data) => {
 //     this.setState({ships: data._embedded.ships})
 //   })
 // }

 handleSubmit(event){
   event.preventDefault();
   fetch("/customers", {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       "name": event.target.name.value,
       "number": event.target.number.value
     })
   })
   .then(() => {
     window.location="/customers";
   })
 }

 render(){

   return(

     <div>
       <form onSubmit={this.handleSubmit}>
         <input type="text"placeholder="Name" name="name"/>
         <input type="text"placeholder="Contact Number" name="number"/>
       </form>
     </div>
   )
 }

}

export default CustomerFormContainer;
