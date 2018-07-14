import * as React from 'react';
import './login-screen.css'
import { appState } from '../../state/app-state';
import { saveAppState } from '../../service/cache-service';

export default class HomeScreen extends React.Component {

  state = {};

  onEmailChange = (event: string) => {
    this.setState({ email: event.target.value })
  }

  login = () => {
    appState.currentUser = this.state.email
    saveAppState()
    window.location.hash = '/home'
  }

  register = () => {
    window.location.hash = '/register'
  }

  componentDidMount() {
    if (appState.currentUser != null) {
      window.location.hash = '/home'
    }
  }

  render() {
    return <div className='page login-form'>
      <h1>Login</h1>
      <input type="text" placeholder='Email' onChange={this.onEmailChange} />
      <input type="password" placeholder="Password" />
      <button onClick={this.login}>Login</button>
      <button onClick={this.register}>Register</button>
    </div>
  }
}
