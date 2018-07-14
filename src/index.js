import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import App from './tt/src/screens/app'
import { HashRouter, withRouter} from 'react-router-dom';
/*{import Feedback from './Feedback'}*/
import registerServiceWorker from './registerServiceWorker';

const AppWithRouter: any = withRouter(App)

ReactDOM.render( <HashRouter>
    <AppWithRouter />
    </HashRouter> , document.getElementById('root'));
registerServiceWorker();
