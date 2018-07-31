import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import fire from "../firebase";
import { appState } from '../appState';
import { saveAppState } from '../cacheService';
import Modal from 'react-responsive-modal';
var f=0;
const modstyle ={
  color : '#2ecc71'
}
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      open: false,
      open2: false
    };
    this.checkUser=this.checkUser.bind(this);
    this.handle=this.handle.bind(this);
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

  async checkUser() {
    try {
      this.onOpenModal();
      var idx = this.state.email.trim().indexOf('@gmail.com');
      if (idx > -1) {
      await fire.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
      appState.currentUser = this.state.email
      saveAppState()
      if (appState.currentUser != null) {
      window.location.hash = '/vendor'
      }}
    else{
      this.onCloseModal();
      this.onOpenModal2();
    }
    } catch (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        this.onCloseModal();
        this.onOpenModal2();
      } else {
        this.onCloseModal();
        this.onOpenModal2();
      }

      console.log(error);
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
  handle(e){
    console.log("hi")
    if(e.key == 'Enter'){
      this.checkUser()
    }
  }
  register(){
    window.location.hash = '/register'
  }
  componentDidMount() {
    if (appState.currentUser != null) {
      window.location.hash = '/vendor'
    }
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.onOpenModal}>Open modal</button> */}
        <div className='modal' >
       <Modal open={this.state.open} onClose={this.onCloseModal} center showCloseIcon={false} styles={this.modstyle}>
          <h2>Logging in</h2> 
        </Modal></div>
        <Modal open={this.state.open2} onClose={this.onCloseModal2} center >
          <h2 className='modin' >Error in your username or password</h2>
        </Modal>
        <div className="center"><img className='image' src={ require('./foodhub.png') } /></div>
        <div className="loginpanel"> 
      
        
        <form onSubmit={this.handleSubmit}>
        <div className="txt">
          <input id="user" type="text" value={this.state.email} onChange={this.updateEmail} placeholder="Email ID" />
          <div className='move'><label for="user" ></label></div>
        </div>
        <div className="txt">
          <input id="pwd" type="password" value={this.state.password} onChange={this.updatePassword} placeholder="Password" />
          <div className='move'><label for="pwd" ></label></div>
        </div>
        <div className="buttons">
          <input onClick={this.checkUser} onKeyDown={this.handle} type="button" value="Login" />
          <span>
            <a onClick={this.register} className="entypo-user-add register">Register</a>
          </span>
          </div> </form></div> </div> 
    );
  }
}