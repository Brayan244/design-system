import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import logoGray from '../../images/logo-gray.svg';
import * as mq from '../globals/mediaqueries';

const Logo = ({
  alt,
  imgSrc,
  isLarge,
  hideOnMobile,
  grayLogo,
  hideOnDesktop,
}) => {
  let src = grayLogo ? logoGray : logo;
  if (imgSrc) {
    src = imgSrc;
  }

  const image = css`
    height: ${isLarge ? '77px' : ' 28px'};
    width: ${isLarge ? '400px' : '145px'};
    display: ${hideOnDesktop ? 'none' : 'inline-block'};
    object-fit: contain;

    ${mq.small} {
      display: ${hideOnMobile ? 'none' : 'inline-block'};
    }
  `;

  return <img src={src} css={image} alt={alt} />;
};

Logo.propTypes = {
  /** Alt text for image */
  alt: PropTypes.string.isRequired,
  /** Logo url or base64 img. If this prop is used, `grayLogo` is ignored */
  imgSrc: PropTypes.string,
  /** Muestra el logo en gris a 400px */
  isLarge: PropTypes.bool,
  /** Muestra el logo en gris a 400px */
  grayLogo: PropTypes.bool,
  /** Ocultar el logo en mobile */
  hideOnMobile: PropTypes.bool,
  /** Ocultar el logo en mobile */
  hideOnDesktop: PropTypes.bool,
};

Logo.defaultProps = {
  imgSrc: null,
  isLarge: false,
  grayLogo: false,
  hideOnMobile: false,
  hideOnDesktop: false,
};

export default Logo;
