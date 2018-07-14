import React, { Component } from 'react';
import './Login.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Diff extends Component {
  constructor() {
    super();
    
    this.state = {
      show: false,
      Vendor: 'Paragon',
    };
    
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.change = this.change.bind(this);
    this.changeFirst = this.changeFirst.bind(this);
    this.changeSecond = this.changeSecond.bind(this);
    this.changeThird = this.changeThird.bind(this);
    this.changeFourth = this.changeFourth.bind(this);
  }
  show(event) {
    event.preventDefault();
    
    this.setState({ show: true }, () => {
      document.addEventListener('click', this.close);
    });
  }
  
  close(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ show: false }, () => {
        document.removeEventListener('click', this.close);
      });  
      
    }
  }
  change() {
    this.setState({ Vendor: 'Paragon' });
    this.setState({ show: false }, () => {
      document.removeEventListener('click', this.close);
    });  
  }
  changeFirst() {
    this.setState({ Vendor: 'Olive' });
    this.setState({ show: false }, () => {
      document.removeEventListener('click', this.close);
    });  
  }changeSecond() {
    this.setState({ Vendor: 'The Cookery' });
    this.setState({ show: false }, () => {
      document.removeEventListener('click', this.close);
    });  
  }changeThird() {
    this.setState({ Vendor: 'French Toast' });
    this.setState({ show: false }, () => {
      document.removeEventListener('click', this.close);
    });  
  }changeFourth() {
    this.setState({ Vendor: 'Sneha' });
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.close);
    });  
  }
    
  render() {
    return (
      <div className='dropDown' >
        <button id='b0'className='dropbtn' onClick={this.show}>
          {this.state.Vendor}<i class="down"></i>
        </button>
        
        {
          this.state.show
            ? (
              <div
                
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button onClick={this.change} className='drop' > Paragon </button>
                <br/>
                <button onClick={this.changeFIrst} className='drop' > Olive </button>
                <br/>
                <button onClick={this.changeSecond} className='drop'> The Cookery </button>
                <br/><button onClick={this.changeThird} className='drop'> French Toast </button>
              <br/><button onClick={this.changeFourth} className='drop'> Sneha </button>
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