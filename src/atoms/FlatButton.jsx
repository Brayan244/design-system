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

const FlatButton = ({
  buttonType,
  text,
  onClick,
  isDisabled,
  type,
  size,
  weight,
}) => {
  const colorType = isDisabled ? colorTypes.disabled : colorTypes[type];

  const container = css`
    color: ${colorType.color};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${typography[weight]};
    font-size: ${typography[size]};
    text-decoration: underline;
    cursor: ${isDisabled ? 'default' : 'pointer'};

    &:hover {
      color: ${colorType.hover};
    }
  `;

  return (
    // eslint doesn't allow dynamic button type
    // eslint-disable-next-line react/button-has-type
    <button
      type={buttonType}
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
  onClick: PropTypes.func,
  /** Texto del botón */
  text: PropTypes.string.isRequired,
  /** Tipo de color del `<button>` */
  type: PropTypes.oneOf(['accent', 'disabled', 'info', 'error']),
  /** Font size */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Font weight */
  weight: PropTypes.oneOf(['bold', 'semibold', 'regular']),
  /** Seelects button type */
  buttonType: PropTypes.oneOf(['button', 'submit']),
};

FlatButton.defaultProps = {
  onClick: () => {},
  type: 'accent',
  size: 'M',
  weight: 'semibold',
  isDisabled: false,
  buttonType: 'button',
};

export default FlatButton;
