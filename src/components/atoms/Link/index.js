import React from 'react';
import './index.scss';

const LinkComponent = ({ title, ...rest }) => {
  return (
    <button className="link" {...rest}>
      {title}
    </button>
  );
};

export default LinkComponent;
