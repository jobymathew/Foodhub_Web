import React from 'react'
import { routes } from './Routes';
import { loadAppState } from './cacheService';

export default class App extends React.PureComponent {

  componentDidMount() {
    loadAppState()
  }

  render() {
    return <div>
      {routes()}
    </div>
  }
}