import React, {Component} from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

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
        <Form horizontal onSubmit={this.handleSubmit}>

          <FormGroup controlId="customerForm">
            <Col componentClass={ControlLabel} sm={2}>
              Name:
            </Col>
            <Col sm={5}>
              <FormControl type="text"placeholder="Name" name="name"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <input type="text"placeholder="Contact Number" name="number"/>
          </FormGroup>
          <FormGroup>
            <button type="submit">Save Customer</button>
          </FormGroup>
        </Form>
      </div>
        )
        }

        };
        export default CustomerFormContainer;
