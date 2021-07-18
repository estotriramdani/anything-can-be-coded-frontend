import React from 'react';
import './index.scss';

const Link = ({ title, ...rest }) => {
  return (
    <button className="link" {...rest}>
      {title}
    </button>
  );
};

export default Link;
