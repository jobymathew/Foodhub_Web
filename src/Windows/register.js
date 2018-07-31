import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import firebase from "../firebase";
import Login from './Login';
import Modal from 'react-responsive-modal';
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
import fire from '../firebase';
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      open: false,
      open2: false
    };
    this.newUser=this.newUser.bind(this);
    // this.handle=this.handle.bind(this);
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onOpenModal2 = () => {
    this.setState({ open2: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  onCloseModal2 = () => {
    this.setState({ open2: false });
  };
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  async newUser() {
    try {
      this.onOpenModal();
      var idx = this.state.email.trim().indexOf('@gmail.com');
      if (idx > -1) {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      this.onCloseModal();
      window.location.hash = '/Vendor'
      }
      else{
        this.onCloseModal();
        this.onOpenModal2();
      }
    }
      catch(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      this.onCloseModal();
      this.onOpenModal2();
      // ...
    }
    
  }
  updateEmail = event => {
    this.setState({
      email: event.target.value
    });
  }
  updatePassword = event => {
    this.setState({
      password: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
  }
  // handle(e){
  //   if(e.key == 'Enter'){
  //     this.newUser()
  //   }
  // }
  goBack = () => {
    window.location.hash = '/Login'
  }

  render() {
    return (
        <div>
         <div className='modal' >
       <Modal open={this.state.open} onClose={this.onCloseModal} center showCloseIcon={false} styles={this.modstyle}>
          <h2>Registering</h2> 
        </Modal></div>
        <Modal open={this.state.open2} onClose={this.onCloseModal2} center >
          <h2 className='modin' >Error in your Email ID or password</h2>
        </Modal> 
          <div className="center"><img className='image' src={ require('./foodhub.png') } /></div>
        <div className="loginpanel"> 
      
        
        <form onSubmit={this.handleSubmit}>
        <div className="txt">
          <input id="user" type="text" value={this.state.email} onChange={this.updateEmail} placeholder="New Email ID" />
          <label for="user" ></label>
        </div>
        <div className="txt">
          <input id="pwd" type="password" value={this.state.password} onChange={this.updatePassword} placeholder="New Password" />
          <label for="pwd" ></label>
        </div>
        
        <div className="buttons">
          <input onClick={this.newUser} type="button" value="Register" />
          <span>
            <a onClick={this.goBack} className="entypo-back register">Go Back</a>
          </span>
          </div> </form></div> </div>
    );
  }
}