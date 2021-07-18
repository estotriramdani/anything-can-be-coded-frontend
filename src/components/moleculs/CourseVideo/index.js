import React from 'react';
import './index.scss';

const CourseVideo = () => {
  return (
    <div className="course-video">
      <iframe
        className="course-video-video"
        src="https://www.youtube.com/embed/t4TQGux6r7M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default CourseVideo;
