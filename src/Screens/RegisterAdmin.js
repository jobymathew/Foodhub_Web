import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import firebase from "firebase";
import Login from './Login1';
import Menu from './Menu';
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyCVKt70FBBBwW6YWp4q2tTflMC6ZImTDA0",
    authDomain: "foodhubweb.firebaseapp.com",
    databaseURL: "https://foodhubweb.firebaseio.com/",
    storageBucket: "gs://foodhubweb.appspot.com",
  };
  firebase.initializeApp(config);
export default class RegisterAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.newUser=this.newUser.bind(this);
  }

   validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  async newUser() {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      alert("You've created an account")
      window.location.hash = '/Menu'
    }
      catch(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('error')
      // ...
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
  goBack = () => {
    window.location.hash = '/Login'
  }

  render() {
    return (
      <div className="Login">
        <p className='heading'> FoodHub </p>
        <form className='form' onSubmit={this.handleSubmit}>
          <FormGroup className='text'  controlId="email" bsSize="large">
            <ControlLabel >New Admin ID</ControlLabel>
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
            type="submit"
            onClick={this.newUser}
          >
            Sign Up
          </Button>
          <Button className='button'
            block
            bsSize="large"
            type="submit"
            onClick={this.goBack}
          >
              Go Back
          </Button>
        </form>
      </div>
    );
  }
}