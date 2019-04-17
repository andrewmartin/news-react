import React from 'react';
import { Route } from 'react-router-dom';

import AppLayout from 'containers/Layout';

const AppRoute = props => {
  return (
    <AppLayout>
      <Route {...props} />
    </AppLayout>
  );
};

export default AppRoute;
