import * as React from 'react';

export default class HomeScreen extends React.Component {

  state = {};

  onBack = () => {
    window.history.back()
  }

  render() {
    return <div className="page">
      <h1>Register</h1>
      <button onClick={this.onBack}>Back</button>
    </div>
  }
}
