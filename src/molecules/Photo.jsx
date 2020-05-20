import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as mq from '../globals/mediaqueries';

const imagesSizes = {
  L: {
    small: 240,
    large: 360,
  },
  M: {
    small: 65,
    large: 170,
  },
  S: {
    small: 240,
    large: 160,
  },

  XS: {
    small: 150,
    large: 159,
  },
};

const Photo = ({ photoUrl, alt, type }) => {
  const photoStyle = css`
    border-radius: 5px;
    height: ${imagesSizes[type].large}px;
    max-height: ${imagesSizes[type].large}px;
    object-fit: cover;
    width: 100%;
    overflow: hidden;

    ${mq.small} {
      height: ${imagesSizes[type].small}px;
      max-height: ${imagesSizes[type].small}px;
    }
  `;

  return <img src={photoUrl} css={photoStyle} alt={alt} />;
};

Photo.propTypes = {
  /** Select size */
  type: PropTypes.oneOf(['L', 'M', 'S']).isRequired,

  /** texto alternativo de la imagen */
  alt: PropTypes.string.isRequired,

  /** URL de la imagen */
  photoUrl: PropTypes.string.isRequired,
};

export default Photo;
