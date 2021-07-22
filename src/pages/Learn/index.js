import React from 'react';
import { LearnContent, LearnLeftSide, LearnRightSide } from '../../components';
import './index.scss';

const Learn = () => {
  return (
    <div className="learn-container">
      <LearnLeftSide />
      <LearnContent />
      <LearnRightSide />
    </div>
  );
};

export default Learn;
