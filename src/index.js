import React from 'react';
import ReactDOM from 'react-dom';
import { createOvermind } from 'overmind';
import { config } from './overmind';
import { Provider } from 'overmind-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const overmind = createOvermind(config, {
 devtools: true
});

ReactDOM.render((
  <Provider value={overmind}>
    <App />
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
