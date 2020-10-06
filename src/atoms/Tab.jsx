import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ label, iconType, children }) => {
  if (!label || !iconType || !children) return null;

  return <>{children}</>;
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
};

export default Tab;
