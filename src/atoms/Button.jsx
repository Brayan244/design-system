import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';

const varianStyles = {
  accent: {
    background: colors.accent,
    color: '#ffffff',
    backgroundDisabled: colors.gray400,
    colorDisabled: '#ffffff',
    backgroundHover: colors.accentStrong,
  },
  noFill: {
    background: '#ffffff',
    color: colors.accent,
    backgroundDisabled: '#ffffff',
    colorDisabled: colors.gray400,
    backgroundHover: colors.gray100,
  },
};

const Button = ({ variant, isDisabled, onClick, text }) => {
  const variantStyle = varianStyles[variant];

  const ButtonStyle = css`
    background-color: ${variantStyle.background};
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: ${variantStyle.color};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${typography.semibold};
    font-size: ${typography.sizeM};
    height: 35px;
    min-width: 100px;
    padding: 9px 24px;
    line-height: 15px;
    transition: background-color 200ms ease-out;
    cursor: ${isDisabled ? 'default' : 'pointer'};

    &:hover {
      background-color: ${variantStyle.backgroundHover};
    }

    &:disabled {
      background-color: ${variantStyle.backgroundDisabled};
      color: ${variantStyle.colorDisabled};
    }
  `;

  return (
    <button
      type="button"
      css={ButtonStyle}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  /** Set the button variant */
  variant: PropTypes.oneOf(['accent', 'noFill']),
  /** Indicates that is disabled */
  isDisabled: PropTypes.bool,
  /** Callback onClick */
  onClick: PropTypes.func.isRequired,
  /** Texto del botón */
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: 'accent',
  isDisabled: false,
};

export default Button;
