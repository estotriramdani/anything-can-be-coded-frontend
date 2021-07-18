import React from 'react';
import { CourseVideo, LearnLeftSide } from '../../components';
import LearnRightSide from '../../components/moleculs/LearnRightSide';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';

const Learn = () => {
  return (
    <div className="learn-container">
      <LearnLeftSide />
      <div className="learn-content">
        <Router>
          <Switch>
            <Route path="/learn/:courseName/:epId">
              <CourseVideo />
            </Route>
          </Switch>
        </Router>
      </div>
      <LearnRightSide />
    </div>
  );
};

export default Learn;
