import React from 'react';
import { css, keyframes } from '@emotion/core';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';

const SpinLoader = ({ text, verticalMargin, horizontalMargin }) => {
  const size = 35;

  const bounce = keyframes`
    0% {
      transform: rotate(0deg);
    }
    
    100% {
      transform: rotate(360deg);
    }
  `;

  const container = css`
    display: flex;
    align-items: center;
    margin: ${verticalMargin ? `20px` : 0} ${horizontalMargin ? `15px` : 0};

    p {
      margin-right: 15px;
    }
  `;

  const loader = css`
    animation: ${bounce} 1.1s infinite linear;
    border-top: 4px solid rgba(199, 199, 199, 0.2);
    border-right: 4px solid rgba(199, 199, 199, 0.2);
    border-bottom: 4px solid rgba(199, 199, 199, 0.2);
    border-left: 4px solid rgb(199, 199, 199);
    border-radius: 50%;
    min-width: ${size}px;
    width: ${size}px;
    height: ${size}px;
  `;

  return (
    <div css={container}>
      {text && (
        <Text weight="semibold" color="grayLight" size="M">
          {text}
        </Text>
      )}
      <div css={loader} />
    </div>
  );
};

SpinLoader.propTypes = {
  /** Load message */
  text: PropTypes.string,

  /** Agrega margen vertical */
  verticalMargin: PropTypes.bool,

  /** Agrega margen horizontal */
  horizontalMargin: PropTypes.bool,
};

SpinLoader.defaultProps = {
  text: '',
  verticalMargin: false,
  horizontalMargin: false,
};

export default SpinLoader;
