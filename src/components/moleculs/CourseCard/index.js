import React from 'react';
import { ImgThumbnail } from '../../../assets';
import './index.scss';

const CourseCard = () => {
  return (
    <div
      className="course-card"
      tabIndex={0}
      // onClick={() => alert('ok')}
      // onKeyPress={(e) => alert('enter')}
    >
      <div className="course-card-thumbnail">
        <img src={ImgThumbnail} alt="Course name here" />
      </div>
      <p className="course-card-title">Dasar Pemrograman JavaScript</p>
      <p className="course-card-subtitle">Esto Triramdani N • JavaScript</p>
    </div>
  );
};

export default CourseCard;
