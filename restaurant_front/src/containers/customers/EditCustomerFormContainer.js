import React, {Component} from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

class EditCustomerFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {customers: []}
  }

  componentDidMount(){
    fetch('/customers')
    .then((res) => res.json())
    .then((data) => {
      this.setState({customers: data._embedded.customers})
      console.log(data);
    })
  }

    render(){
      return(
        <div className="customerFormContainer">
          <div className="row">
            <Form horizontal onSubmit={this.handleSubmit}>

              <FormGroup bsSize="large" controlId="customerForm">
                <Col className="font" componentClass={ControlLabel} smOffset={1} sm={4}> {' '}
                  <strong className="font">Name: </strong>
                </Col>
                <Col sm={4}>
                  <FormControl type="text"placeholder="Name" name="name"/>
                </Col>
              </FormGroup>{' '}

              <FormGroup bsSize="large" controlId="customerForm">
                <Col className="font" componentClass={ControlLabel} smOffset={1} sm={4}> {' '}
                  <strong className="font">Contact Number: </strong>
                </Col>
                <Col sm={4}>
                  <FormControl type="text"placeholder="Contact Number" name="number"/>
                </Col>
              </FormGroup>{' '}

              <FormGroup>
                <Col smOffset={5} sm={5}>
                  <Button className="submit" type="submit">Save Edited Details</Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
          <img className="cutlery" src="/images/cutlery.jpg" alt=""/>
        </div>
      )
    }

  };

  export default EditCustomerFormContainer;
