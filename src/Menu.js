import React, { Fragment, Component } from 'react';
import Header from './Navi';
import './App.css';
import Vendor from './Vendor';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dates from './Dates';
import { Button } from "react-bootstrap";
export default class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = (
        { vendor : ''}
    );
    this.Vend=this.Vend.bind(this);
}  
  Vend(vendorId) {
    window.location.hash = `/vendor/${vendorId}`
  }

  
  render(){
    const vendors = ['Paragon', 'Olive', 'The Cookery','French Toast','Sneha'];

        return(
            <div>
              <Header />
              <div className='gocenter'>{vendors.map(vendor => <button className = 'vendoradd' key={vendor} onClick={() => this.Vend(vendor)}>{vendor}</button>)}
              </div>
            </div>
        );
    }
}
Menu.defaultProps = { name: 'unknown'};