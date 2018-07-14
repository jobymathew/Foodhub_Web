import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { securePage } from './secure-page'
import LoginScreen from './login/login-screen'
import RegisterScreen from './register/register-screen'
import HomeScreen from './home/home-screen'
import VendorScreen from './vendor/vendor-screen'

export const routes = () => {
  return <Switch>
    <Route path='/login' component={LoginScreen} />
    <Route path='/register' component={RegisterScreen} />
    <Route path='/home' component={securePage(HomeScreen)} />
    <Route path='/vendor/:vendorId' component={securePage(VendorScreen)} />
    <Route path='*' component={securePage(HomeScreen)} />
  </Switch>
}