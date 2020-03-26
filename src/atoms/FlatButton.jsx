import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';

const colorTypes = {
  accent: {
    color: colors.accent,
    hover: colors.accentStrong,
  },
  disabled: {
    color: colors.gray400,
    hover: colors.gray400,
  },
  info: {
    color: colors.info,
    hover: colors.infoStrong,
  },
  error: {
    color: colors.error,
    hover: colors.errorStrong,
  },
};

const sizes = {
  XS: typography.sizeXS,
  S: typography.sizeS,
  M: typography.sizeM,
  L: typography.sizeL,
  XL: typography.sizeXL,
  XXL: typography.sizeXXL,
};

const FlatButton = ({ text, onClick, isDisabled, type, size }) => {
  const colorType = isDisabled ? colorTypes.disabled : colorTypes[type];

  const container = css`
    color: ${colorType.color};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${typography.semibold};
    font-size: ${sizes[size]};
    text-decoration: underline;
    cursor: ${isDisabled ? 'default' : 'pointer'};

    &:hover {
      color: ${colorType.hover};
    }
  `;

  return (
    <button
      type="button"
      css={container}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

FlatButton.propTypes = {
  /** Indicates the `<button>` is disabled */
  isDisabled: PropTypes.bool,
  /** Callback onClick */
  onClick: PropTypes.func.isRequired,
  /** Texto del botón */
  text: PropTypes.string.isRequired,
  /** Tipo de color del `<button>` */
  type: PropTypes.oneOf(['accent', 'disabled', 'info', 'error']),
  /** Font size */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
};

FlatButton.defaultProps = {
  type: 'accent',
  size: 'M',
  isDisabled: false,
};

export default FlatButton;
