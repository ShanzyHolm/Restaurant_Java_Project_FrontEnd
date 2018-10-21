import React, {Component} from 'react';

class CustomerFormContainer extends Component {
  constructor() {
    super();
  }
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
          <button type="submit">Save Customer</button>
        </form>
      </div>
    )
  }

};
export default CustomerFormContainer;
