import * as React from 'react';
import { appState } from '../../state/app-state';
import { saveAppState } from '../../service/cache-service';

export default class HomeScreen extends React.Component {

  state = {};

  logout = () => {
    appState.currentUser = undefined
    saveAppState()
    window.location.hash = '/login'
  }

  gotoVendor = (vendorId) => {
    window.location.hash = `/vendor/${vendorId}`
  }

  render() {
    const vendors = ['vendor1', 'vendor2', 'vendor3']
    return <div className="page">
      <h1>Home Page</h1>
      {vendors.map(vendor => <button key={vendor} onClick={() => this.gotoVendor(vendor)}>{vendor}</button>)}
      <button onClick={this.logout}>Logout</button>
    </div>
  }
}
