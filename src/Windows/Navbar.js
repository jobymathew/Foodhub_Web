import React from 'react';
import './nav.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { appState } from '../appState';
import { saveAppState } from '../cacheService';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  this.logout=this.logout.bind(this);
  this.vend=this.vend.bind(this);
  this.announce=this.announce.bind(this);
  this.feedb=this.feedb.bind(this);
  }
  logout = () => {
    appState.currentUser = null;
    saveAppState()
    window.location.hash = '/login'
  }
  vend = () => {
        
        document.getElementById('1').className='active'
        document.getElementById('2').className=document.getElementById('2').className.replace('active','')
        document.getElementById('3').className=document.getElementById('3').className.replace('active','')
        window.location.hash = '/vendor'
  }
  announce(){
    console.log('hi')
    document.getElementById('3').className='active'
    document.getElementById('1').className=document.getElementById('1').className.replace('active','')
    document.getElementById('2').className=document.getElementById('2').className.replace('active','')
    window.location.hash = '/announce'
}
feedb(){
  document.getElementById('2').className='active'
  document.getElementById('1').className=document.getElementById('1').className.replace('active','')
  document.getElementById('3').className=document.getElementById('3').className.replace('active','')
  window.location.hash = '/feedback'
}
render() {
      return (        
          <div><div id='cssmenu'>
          <Navbar> <Nav>
             <NavItem id='1'  onClick={this.vend}><a className='active' className='right'>Menu</a></NavItem>
             <NavItem id='2' onClick={this.feedb}><a className='right' >Feedback</a></NavItem>
             <NavItem id='3' onClick={this.announce}><a className='right'>Announcement</a></NavItem>
             <NavItem id='4'><a className='lgut' onClick={this.logout}>Logout</a></NavItem>
          </Nav> </Navbar>
          </div></div>
      );
    }
}
