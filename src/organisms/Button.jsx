import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';
import LoaderButton from '../molecules/LoaderButton';

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
  danger: {
    background: '#ffffff',
    color: colors.error,
    backgroundDisabled: '#ffffff',
    colorDisabled: colors.gray400,
    backgroundHover: colors.gray100,
  },
  discount: {
    background: colors.discount,
    color: '#ffffff',
    backgroundDisabled: colors.gray400,
    colorDisabled: '#ffffff',
    backgroundHover: colors.discountStrong,
  },
  default: {
    background: '#ffffff',
    color: colors.gray500,
    backgroundDisabled: '#ffffff',
    colorDisabled: colors.gray400,
    backgroundHover: colors.gray100,
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

const paddingSizes = {
  L: '10px 25px',
  M: '5px 15px',
  S: '0 5px',
};

const Button = ({
  variant,
  isDisabled,
  onClick,
  text,
  isLoading,
  fontSize,
  padding,
}) => {
  if (isLoading)
    return (
      <LoaderButton isNoFill={variant !== 'accent' && variant !== 'discount'} />
    );

  const variantStyle = varianStyles[variant];

  const ButtonStyle = css`
    background-color: ${variantStyle.background};
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: ${variantStyle.color};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${typography.semibold};
    font-size: ${sizes[fontSize]};
    min-height: 35px;
    min-width: 100px;
    padding: ${paddingSizes[padding]};
    line-height: 15px;
    transition: background-color 200ms ease-out;
    cursor: ${isDisabled ? 'default' : null};

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
  variant: PropTypes.oneOf([
    'accent',
    'noFill',
    'danger',
    'discount',
    'default',
  ]),
  /** Indicates that is disabled */
  isDisabled: PropTypes.bool,
  /** Callback onClick */
  onClick: PropTypes.func.isRequired,
  /** Texto del botón */
  text: PropTypes.string.isRequired,
  /** Indicates that is disabled */
  isLoading: PropTypes.bool,
  /** Select font size: `S=11px`, `S=13px`, `M=15px`, `L=16px`, `XL=18px` `XXL=20px`, */
  fontSize: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Select padding size: `S=11px`, `S=0 5px`, `M=5px 15px`, `L=10px 25px` */
  padding: PropTypes.oneOf(['S', 'M', 'L']),
};

Button.defaultProps = {
  variant: 'default',
  isDisabled: false,
  isLoading: false,
  fontSize: 'M',
  padding: 'L',
};

export default Button;
