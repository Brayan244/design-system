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

const FlatButton = ({ text, onClick, isDisabled, type }) => {
  const container = css`
    color: ${colorTypes[type].color};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${typography.semibold};
    font-size: ${typography.sizeM};
    text-decoration: underline;
    cursor: ${isDisabled ? 'default' : 'pointer'};

    &:hover {
      color: ${colorTypes[type].hover};
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
  /** Texto del botón */
  text: PropTypes.string.isRequired,
  /** Callback onClick */
  onClick: PropTypes.func.isRequired,
  /** Indicates the `<button>` is disabled */
  isDisabled: PropTypes.bool,
  /** Tipo de color del `<button>` */
  type: PropTypes.oneOf(['accent', 'disabled', 'info', 'error']).isRequired,
};

FlatButton.defaultProps = {
  isDisabled: false,
};

export default FlatButton;
