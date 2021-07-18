import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Learn } from '../../pages';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/learn">
          <Learn />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
