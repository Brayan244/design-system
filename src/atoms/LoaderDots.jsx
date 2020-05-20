import React from 'react';
import { css, keyframes } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';

const sizes = {
  S: '10px',
  M: '20px',
};

const LoaderDots = ({ isAccent, size }) => {
  const wrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  `;

  const bounce = keyframes`
    0,
    100% {
      transform: scale(1);
    }
    
    25%,
    75% {
      transform: scale(0.5);
    }
    
    50% {
      transform: scale(0);
    }
  `;

  const circle = css`
    animation: ${bounce} 1.5s infinite linear;
    border-radius: 50%;
    width: ${sizes[size]};
    height: ${sizes[size]};
    background-color: ${isAccent ? `${colors.accent}` : '#ffffff'};
    margin: 5px;

    &:last-child {
      margin-right: 0;
    }

    &:nth-child(2n) {
      animation-delay: 0.25s;
    }

    &:nth-child(3n) {
      animation-delay: 0.75s;
    }
  `;

  return (
    <div css={wrapper}>
      <div css={circle} />
      <div css={circle} />
      <div css={circle} />
    </div>
  );
};

LoaderDots.propTypes = {
  /** Color del loader */
  isAccent: PropTypes.bool,
  /** Sizes for loader: `10px`, `20px` */
  size: PropTypes.string,
};

LoaderDots.defaultProps = {
  isAccent: false,
  size: 'S',
};

export default LoaderDots;
