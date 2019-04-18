import React from 'react';
import { Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import HomeContainer from 'containers/Home';
import NotFoundContainer from 'containers/NotFound';
import AppRoute from './AppRoute';

export default hot(() => (
  <Switch>
    <AppRoute component={HomeContainer} exact path="/" />
    <AppRoute component={NotFoundContainer} path="*" />
  </Switch>
));
