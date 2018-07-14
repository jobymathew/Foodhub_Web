import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, withRouter } from 'react-router-dom'

import App from './screens/app';
import './index.css';

const AppWithRouter: any = withRouter(App)

ReactDOM.render(<HashRouter>
  <AppWithRouter />
</HashRouter>, document.getElementById('root'));
registerServiceWorker();
