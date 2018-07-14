import React from 'react';
import './navstyle.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
import Vendor from './Vendor';
import Menu from './Menu';
import Announcement from './Announcement';
import Feedback from './Feedback';
import { appState } from './appState';
const st = {
  color: 'red'
};

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }
  logout = () => {
    appState.currentUser = null;
    window.location.hash = '/login'
  }
  vend = () => {
        window.location.hash = '/vendor'
  }
  announce(){
    window.location.hash = '/announce'
}
feedb(){
  window.location.hash = '/feedback'
}

  render() {
      return (
         
          <div><div>
        <Navbar className="navbar" >
  <Navbar.Header>
    <Navbar.Brand>
      <a className='navbarb'>FOODHUB</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem className='navbara'  onClick={this.vend}>
      Vendors
    </NavItem>
    <NavItem className='navbara' onClick={this.feedb}>
    Feedbacks
    </NavItem>
    <NavItem className='navbara' onClick={this.announce}>
    Announcements
    </NavItem>
    
   {/*} <DropdownButton  title='Feedbacks' className='dropdown'>
      <MenuItem  className='dropdowncnt' eventKey="1">All Feedbacks</MenuItem>
      <MenuItem className='dropdowncnt' eventKey="2">Complaints</MenuItem>
    </DropdownButton>*/}
    <NavItem className='navbarc' onClick={this.logout}>
    Log Out
    </NavItem>
    
  </Nav>

</Navbar>

</div></div>

      );
    }
}
