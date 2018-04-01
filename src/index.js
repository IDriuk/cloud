import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './components/App/App';

import { getAll } from './actions';
import reducer from './reducers'

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

store.dispatch(getAll())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
