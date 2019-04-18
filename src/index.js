import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore, { history } from 'store';
import Routes from './containers/Routes';

import './index.scss';

const target = document.querySelector('#root');

const { store } = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  target
);
