import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { securePage } from './securePage';
import Login from './Windows/Login'
import Register from './Windows/register';
import Announce from './Windows/Announcement';
import Feedback from './Windows/Feedback';
import Vendor from './Windows/Vendor';
import Update from './Windows/update'
export const routes = () => {
  return <Switch>
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/announce' component={securePage(Announce)} />
    <Route path='/update' component={securePage(Update)} />
    <Route path='/vendor' component={securePage(Vendor)} />
    <Route path='/logout' component={Login}  />
    <Route path='/feedback' component={securePage(Feedback)} />
    <Route path='*' component={securePage(Vendor)} />
  </Switch>
}