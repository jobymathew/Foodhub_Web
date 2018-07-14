import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Registerotp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      adminid: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.adminid.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <p className='heading'> FoodHub </p>
        <form className='form' onSubmit={this.handleSubmit}>
          <FormGroup className='text'  controlId="email" bsSize="large">
            <ControlLabel >Enter your TCS Mail ID</ControlLabel>
            <FormControl
              title='enter your Admin ID' className='input' autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button className='button'
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Get OTP
          </Button>
          <FormGroup className='text' controlId="adminid" bsSize="large">
            <ControlLabel>Enter Admin ID</ControlLabel>
            <FormControl className='input' title='Enter your adminid'
              value={this.state.adminid}
              onChange={this.handleChange}
              type="adminid"
            />
          </FormGroup>
          
          <Button className='button'
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}