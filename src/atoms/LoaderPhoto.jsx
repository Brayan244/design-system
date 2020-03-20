import React from 'react';
import { css, keyframes } from '@emotion/core';
import PropTypes from 'prop-types';
import * as mq from '../globals/mediaqueries';

const imagesSizes = {
  L: {
    small: 240,
    large: 360,
  },
  M: {
    small: 150,
    large: 170,
  },
  S: {
    small: 65,
    large: 159,
  },
};

const Photo = ({ type }) => {
  const bounce = keyframes`
    0% {
      background-position: -1400px 0;
    }
    
    100% {
      background-position: 1400px 0;
    }
  `;

  const loader = css`
    animation: ${bounce} 1s linear infinite;
    animation-fill-mode: forwards;
    height: ${imagesSizes[type].large}px;
    width: 100%;
    background-color: #dddddd;
    background-image: linear-gradient(
      to left,
      #dddddd 0%,
      #f5f5f5 20%,
      #efefef 40%,
      #dddddd 100%
    );
    background-repeat: no-repeat;
    background-size: cover;

    ${mq.small} {
      height: ${imagesSizes[type].small}px;
    }
  `;

  return <div css={loader} />;
};

Photo.propTypes = {
  /** Select size */
  type: PropTypes.oneOf(['L', 'M', 'S']).isRequired,
};

export default Photo;
