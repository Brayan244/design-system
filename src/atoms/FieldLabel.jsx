import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';

const FieldLabel = ({ inputId, isPlaceholder, text }) => {
  const activeStyle = css`
    transform: translateY(-14px) scale(0.8);
    transform-origin: 0 0;
  `;

  const labelStyle = css`
    color: ${colors.gray400};
    position: absolute;
    top: 0;
    left: 15px;
    font-size: ${typography.sizeM};
    cursor: text;
    transition: transform 0.2s ease-out, color 0.2s ease-out;
    transform-origin: 0% 100%;
    text-align: initial;
    transform: translateY(12px);
    font-family: 'Open Sans', sans-serif;
    ${isPlaceholder || activeStyle}
  `;

  return (
    <label htmlFor={inputId} css={labelStyle}>
      {text}
    </label>
  );
};

FieldLabel.propTypes = {
  inputId: PropTypes.string.isRequired,
  isPlaceholder: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

FieldLabel.defaultProps = {
  isPlaceholder: false,
};

export default FieldLabel;
