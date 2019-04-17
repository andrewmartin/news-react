import React from 'react';
import { Switch } from 'react-router-dom';

import HomeContainer from 'containers/Home';
import AppRoute from './AppRoute';

export default () => (
  <Switch>
    <AppRoute component={HomeContainer} exact path="/" />
  </Switch>
);
