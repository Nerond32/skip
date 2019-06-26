import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, onClick }) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: ''
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
