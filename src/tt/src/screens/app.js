import React from 'react'
import { routes } from './routes';
import { loadAppState } from '../service/cache-service';

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