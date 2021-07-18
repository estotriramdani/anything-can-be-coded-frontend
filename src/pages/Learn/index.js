import React from 'react';
import { CourseVideo, LearnLeftSide } from '../../components';
import LearnRightSide from '../../components/moleculs/LearnRightSide';
import './index.scss';

const Learn = () => {
  return (
    <div className="learn-container">
      <LearnLeftSide />
      <div className="learn-content">
        <CourseVideo />
      </div>
      <LearnRightSide />
    </div>
  );
};

export default Learn;
