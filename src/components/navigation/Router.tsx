import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import LaunchesPage from '../../pages/LaunchesPage';

function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/launches">
          <LaunchesPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;