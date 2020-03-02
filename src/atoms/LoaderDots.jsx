import React from 'react';
import { css, keyframes } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';

const LoaderDots = ({ isAccent }) => {
  const wrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const bounce = keyframes`
    0%,
    80%,
    100% {
      transform: scale(1);
    }
    
    40% {
      transform: scale(0);
    }
  `;

  const circle = css`
    border-radius: 50%;
    width: 10px;
    height: 10px;
    animation: ${bounce} 1.8s infinite ease-in-out;
    background-color: ${isAccent ? `${colors.accent}` : '#ffffff'};
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }

    &:nth-child(2n) {
      animation-delay: 0.35s;
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
};

LoaderDots.defaultProps = {
  isAccent: false,
};

export default LoaderDots;
