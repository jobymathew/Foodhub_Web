import React, { Component } from 'react';
import './Login.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class CF extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      Feedback : 'Feedbacks',
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.changeComp = this.changeComp.bind(this);
    this.changeFeed = this.changeFeed.bind(this);
    
  }
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }
  changeFeed() {
    this.setState({ Feedback: 'Feedbacks' });
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });  
    window.location.hash = '/Feedback';
  }
  changeComp() {
    this.setState({ Feedback: 'Complaints' });
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });  
    window.location.hash = '/Complaints';
   
  }
    
  render() {
    return (
      <div className='dropDown' >
        <button id='b0'className='dropbtn' onClick={this.showMenu}>
          {this.state.Feedback}<i class="down"></i>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button onClick={this.changeFeed} className='drop' > Feedbacks </button>
                <br/>
                <button onClick={this.changeComp} className='drop' > Complaints </button>
                <br/>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}