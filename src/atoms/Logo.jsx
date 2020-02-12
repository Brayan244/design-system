import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import logo from '../../images/logo.svg';
import logoGray from '../../images/logo-gray.svg';
import * as mq from '../globals/mediaqueries';

const Logo = ({ imgSrc, isLarge, hideOnMobile, grayLogo }) => {
  const logoStyle = css`
    height: ${isLarge ? '77px' : ' 28px'};
    width: ${isLarge ? '400px' : '145px'};
    ${imgSrc
      ? `background-image: url(${imgSrc});`
      : `background-image: url(${grayLogo ? logoGray : logo});`}
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;

    ${mq.small} {
      display: ${hideOnMobile ? 'none' : 'inline-block'};
    }
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <div css={logoStyle} />
    </>
  );
};

Logo.propTypes = {
  /** Logo url or base64 img. If this prop is used, `grayLogo` is ignored */
  imgSrc: PropTypes.string,
  /** Muestra el logo en gris a 400px */
  isLarge: PropTypes.bool,
  /** Muestra el logo en gris a 400px */
  grayLogo: PropTypes.bool,
  /** Ocultar el logo en mobile */
  hideOnMobile: PropTypes.bool,
};

Logo.defaultProps = {
  imgSrc: null,
  isLarge: false,
  grayLogo: false,
  hideOnMobile: false,
};

export default Logo;
