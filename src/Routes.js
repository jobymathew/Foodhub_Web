import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { securePage } from './securePage';
import Login from './Login1';
import RegisterAdmin from './RegisterAdmin';
import Menu from './Menu';
import Announcement from './Announcement';
import Feedback from './Feedback';
import Vendor from './Vendor';
import Update from './Update';
export const routes = () => {
  return <Switch>
    <Route path='/login' component={Login} />
    <Route path='/registerAdmin' component={RegisterAdmin} />
    
    <Route path='/announce' component={securePage(Announcement)} />
    <Route path='/vendor/:vendorId' component={securePage(Vendor)} />
    <Route path='/logout' component={Login}  />
    <Route path='/update' component={securePage(Update)}  />
    <Route exact path='/menu' component={securePage(Menu)} />
    <Route path='/feedback' component={securePage(Feedback)} />
    <Route path='*' component={securePage(Vendor)} />
  </Switch>
}