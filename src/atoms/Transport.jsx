import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import iconBus from '../../images/icons/icon-bus.svg';
import iconFlight from '../../images/icons/icon-flight.svg';
import iconDot from '../../images/icons/icon-dot.svg';

function selectTransport(type) {
  switch (type) {
    case 'iconBus':
      return iconBus;
    case 'iconFlight':
      return iconFlight;
    case 'iconDot':
      return iconDot;
    default:
      return '';
  }
}

const Transport = ({ type }) => {
  const iconStyle = css`
    height: 25px;
    width: 25px;
    background-image: url(${selectTransport(type)});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <div css={iconStyle} />
    </>
  );
};

Transport.propTypes = {
  /** Selecciona el icono de transportes */
  type: PropTypes.oneOf(['iconBus', 'iconFlight', 'iconDot']).isRequired,
};
export default Transport;
