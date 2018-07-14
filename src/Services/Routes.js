import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { securePage } from '../securePage';
import Login from '../Screens/Login1';
import RegisterAdmin from '../Screens/RegisterAdmin';
import Menu from '../Screens/Menu';
import Announcement from '../Screens/Announcement';
import Feedback from '../Screens/Feedback';
import Vendor from '../Screens/Vendor';
import Complaints from '../Screens/Complaints';

export const routes = () => {
  return <Switch>
    <Route path='/Login' component={Login} />
    <Route path='/RegisterAdmin' component={RegisterAdmin} />
    <Route path='/Announce' component={Announcement} />
    <Route path='/Vendor/{id}' render={(props) => (
  <Vendor />
)}/>
    <Route path='/logout' component={Login}  />
    <Route path='/Complaints' component={Complaints}  />
    <Route exact path='/Menu' component={securePage(Menu)} />
    <Route path='/Feedback' component={Feedback} />
    <Route path='*' component={securePage(Menu)} />
  </Switch>
}