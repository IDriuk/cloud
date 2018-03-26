import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import AppContainer from './containers/AppContainer';

import { getAll } from './actions';
import reducer from './reducers'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

store.dispatch(getAll())

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
