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
  Vend() {
    this.setState( { vendor : 'cookery' } )
    window.location.hash = '/Vendor/paragon'
  }

  
  render(){
        return(
            <div>
              <Header />
            <Button className='menubutton'
            block
            bsSize="large"
            type="submit" 
            onClick={this.Vend}
          > 
            Paragon
          
          </Button>
          <Button className='menubutton'
            block
            bsSize="large"
            type="submit"
            onClick={this.Vend}

          >
            The Cookery
          </Button>
          <Button className='menubutton'
            block
            bsSize="large"
            type="submit"
            onClick={this.Vend}

          >
            Olive
          </Button>
          <Button className='menubutton'
            block
            bsSize="large"
            type="submit"
            onClick={this.Vend}

          >
            French Toast
          </Button>
          <div className='gocenter'><Button className='vendoradd'
            block
            bsSize="large"
            type="submit"
            onClick={this.Vend}

          >
            Add a vendor
          </Button>
          </div>
            </div>
        );
    }
}
Menu.defaultProps = { name: 'unknown'};