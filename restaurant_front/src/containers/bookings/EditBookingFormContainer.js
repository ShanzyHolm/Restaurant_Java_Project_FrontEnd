import React, {Component} from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

class EditBookingFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {bookings: []}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event){
    let value = event.target.value
    let name = event.target.name

    let bookingsCopy = Object.assign({}, this.state.bookings);
    bookingsCopy[name] = value;
    this.setState({ bookings: bookingsCopy })
  }


  handleSubmit(event){
    event.preventDefault();
    console.log("submit is: ",event.target.date);
    fetch(this.props.url, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "date": event.target.date.value,
      })
    })
    .then(() => {
      window.location="/bookings";
    })
  }

  componentDidMount(){
    fetch(this.props.url)
    .then((res) => res.json())
    .then((data) => {
      this.setState({bookings: data})
      console.log(data);
    })
  }

  render(){
    console.log(this.props.url);
    return(
      <div className="bookingFormContainer">
        <div className="row">
          <Form horizontal onSubmit={this.handleSubmit}>



            <FormGroup bsSize="large" controlId="bookingForm">
              <Col className="font" componentClass={ControlLabel} smOffset={1} sm={4}> {' '}
                <strong className="font">Change Booking Date: </strong>
              </Col>
              <Col sm={4}>
                <FormControl type="datetime-local" value={this.state.bookings.date} onChange={this.handleChange} name="date"/>
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

  export default EditBookingFormContainer;
