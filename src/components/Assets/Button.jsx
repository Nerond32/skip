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
  children: '',
  className: ''
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
