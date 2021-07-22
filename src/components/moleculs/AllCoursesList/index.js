import React from 'react';
import './index.scss';

const AllCoursesList = ({ title, episodeNumber, ...rest }) => {
  return (
    <button {...rest} className="all-courses-list-item">
      <span className="all-courses-list-item-episode-number">
        {episodeNumber}
      </span>{' '}
      <br /> {title}
    </button>
  );
};

export default AllCoursesList;
