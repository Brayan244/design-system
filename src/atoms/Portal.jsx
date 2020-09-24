import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children, selector }) => {
  const element = document.querySelector(selector);

  if (!element) return null;

  return ReactDOM.createPortal(children, element);
};

Portal.propTypes = {
  selector: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Portal;
