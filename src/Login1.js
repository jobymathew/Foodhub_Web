import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import Menu from './Menu';
import fire from "firebase";
import Vendor from './Vendor';
import RegisterAdmin from "./RegisterAdmin";
import { appState } from './appState';
import { saveAppState } from './cacheService';
var f=0;
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.checkUser=this.checkUser.bind(this);
  }
  async checkUser() {
    try {
      await fire.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
      appState.currentUser = this.state.email
      saveAppState()
      if (appState.currentUser != null) {
       window.location.hash = '/vendor'
      }
    } catch (error) {
      // Handle Errors here.
      f = 1;
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }

      console.log(error);
    }
  } 
    

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  register(){
    window.location.hash = '/registerAdmin'
  }
  componentDidMount() {
    if (appState.currentUser != null) {
      window.location.hash = '/vendor'
    }
  }
  render() {
    return (
    <div className="Login">
        <p className='heading'> FoodHub </p>
        <form className='form' onSubmit={this.handleSubmit}>
          <FormGroup className='text'  controlId="email" bsSize="large">
            <ControlLabel >Admin ID</ControlLabel>
            <FormControl
              title='enter your Admin ID' className='input' autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className='text' controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl className='input' title='Enter your password'
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button className='button'
            block
            bsSize="large"
            onClick={this.checkUser}
            type="submit"
          >
            Login
          </Button>
          <Button className='button'
            block
            bsSize="large"
            onClick={this.register}
            type="submit"
          >
             Register 
          </Button>
        </form>

      </div>
    );
  }
}