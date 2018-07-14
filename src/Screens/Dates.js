import React, { Component } from 'react';
import './Login.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Dates extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      Day: 'Monday',
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.changeFirstDate = this.changeFirstDate.bind(this);
    this.changeSecondDate = this.changeSecondDate.bind(this);
    this.changeThirdDate = this.changeThirdDate.bind(this);
    this.changeFourthDate = this.changeFourthDate.bind(this);
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
  changeDate() {
    this.setState({ Day: 'Monday' });
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });  
  }
  changeFirstDate() {
    this.setState({ Day: 'Tuesday' });
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });  
  }changeSecondDate() {
    this.setState({ Day: 'Wednesday' });
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });  
  }changeThirdDate() {
    this.setState({ Day: 'Thursday' });
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });  
  }changeFourthDate() {
    this.setState({ Day: 'Friday' });
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });  
  }
    
  render() {
    return (
      <div className='dropDown' >
        <button id='b0'className='dropbtn' onClick={this.showMenu}>
          {this.state.Day}<i class="down"></i>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button onClick={this.changeDate} className='drop' > Monday </button>
                <br/>
                <button onClick={this.changeFirstDate} className='drop' > Tuesday </button>
                <br/>
                <button onClick={this.changeSecondDate} className='drop'> Wednesday </button>
                <br/><button onClick={this.changeThirdDate} className='drop'> Thursday</button>
              <br/><button onClick={this.changeFourthDate} className='drop'> Friday </button>
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