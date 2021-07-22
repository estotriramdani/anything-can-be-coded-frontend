import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ImgThumbnail } from '../../../assets';
import './index.scss';

const CourseCard = ({
  courseName = 'Default Course Name',
  courseAthor = 'Esto',
  courseLang = 'JavaScript',
  courseSlug = 'default',
  ...rest
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleShowCourse = () => {
    history.push(`/learn/${courseSlug}/1`);
    dispatch({ type: 'COURSE_VIDEO' });
  };
  return (
    <div
      className="course-card"
      tabIndex={0}
      onClick={handleShowCourse}
      onKeyPress={handleShowCourse}
    >
      <div className="course-card-thumbnail">
        <img src={ImgThumbnail} alt="Course name here" />
      </div>
      <p className="course-card-title">{courseName}</p>
      <p className="course-card-subtitle">
        {courseAthor} • {courseLang}
      </p>
    </div>
  );
};

export default CourseCard;
