import React from 'react';
import { css, keyframes } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';

const tones = {
  primary: colors.primary,
  accent: colors.accent,
  gray: colors.gray300,
  white: colors.white,
};

const sizes = {
  S: '30px',
  M: '60px',
};

const LoaderPulse = ({ color, size, hasWrapper }) => {
  const bounce = keyframes`
    0% {
      transform: scale(0);
      opacity: 0;
    }
    
    5% {
      opacity: 1;
    }
    
    100% {
      transform: scale(1);
      opacity: 0;
    }
  `;

  const wrapperStyles = css`
    margin: 20px auto;
  `;

  const container = css`
    position: relative;
    width: ${sizes[size]};
    height: ${sizes[size]};
    ${hasWrapper && wrapperStyles}
  `;

  const circles = css`
    animation: ${bounce} 1.2s 0s linear infinite;
    animation-fill-mode: both;
    background-color: ${tones[color]};
    border-radius: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    margin: 0;
    width: ${sizes[size]};
    height: ${sizes[size]};
  `;

  const firstCircle = css`
    ${circles}
  `;

  const secondCircle = css`
    ${circles}
    animation-delay: -0.4s;
  `;

  const thirdCircle = css`
    ${circles}
    animation-delay: -0.2s;
  `;

  return (
    <div>
      <div css={container}>
        <div css={firstCircle} />
        <div css={secondCircle} />
        <div css={thirdCircle} />
      </div>
    </div>
  );
};

LoaderPulse.propTypes = {
  /** Sizes for loader: `30px`, `60px` */
  size: PropTypes.string,
  /** Color */
  color: PropTypes.oneOf(['primary', 'accent', 'gray', 'white']),
  /** Adds margin and center position */
  hasWrapper: PropTypes.bool,
};

LoaderPulse.defaultProps = {
  color: 'accent',
  size: 'S',
  hasWrapper: true,
};

export default LoaderPulse;
