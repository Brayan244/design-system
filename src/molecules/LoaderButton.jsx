import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import LoaderDots from '../atoms/LoaderDots';

const LoaderButton = ({ isNoFill }) => {
  const loaderContainer = css`
    background-color: ${isNoFill ? '#ffffff' : colors.gray400};
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 35px;
    min-width: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div css={loaderContainer}>
      <LoaderDots isAccent={isNoFill} />
    </div>
  );
};

LoaderButton.propTypes = {
  /** Color del loader */
  isNoFill: PropTypes.bool,
};

LoaderButton.defaultProps = {
  isNoFill: false,
};

export default LoaderButton;
