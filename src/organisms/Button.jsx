import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as mq from '../globals/mediaqueries';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';
import LoaderButton from '../molecules/LoaderButton';

const varianStyles = {
  accent: {
    background: colors.accent,
    backgroundDisabled: colors.gray400,
    backgroundHover: colors.accentStrong,
    color: '#ffffff',
    colorDisabled: '#ffffff',
    focus: colors.accent,
  },
  noFill: {
    background: '#ffffff',
    backgroundDisabled: '#ffffff',
    backgroundHover: colors.gray100,
    color: colors.accent,
    colorDisabled: colors.gray400,
    focus: colors.accent,
  },
  danger: {
    background: '#ffffff',
    backgroundDisabled: '#ffffff',
    backgroundHover: colors.gray100,
    color: colors.error,
    colorDisabled: colors.gray400,
    focus: colors.error,
  },
  discount: {
    background: colors.discount,
    backgroundDisabled: colors.gray400,
    backgroundHover: colors.discountStrong,
    color: '#ffffff',
    colorDisabled: '#ffffff',
    focus: colors.discountStrong,
  },
  default: {
    background: '#ffffff',
    backgroundHover: colors.gray100,
    backgroundDisabled: '#ffffff',
    color: colors.gray500,
    colorDisabled: colors.gray400,
    focus: colors.gray400,
  },
};

const paddingSizes = {
  L: '10px 25px',
  M: '5px 15px',
  S: '0 5px',
};

const Button = ({
  buttonType,
  variant,
  isDisabled,
  onClick,
  text,
  isLoading,
  fontSize,
  padding,
  fullWidthOnSmall,
  withHeight,
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
    font-size: ${typography[fontSize]};
    min-height: 35px;
    min-width: 100px;
    padding: ${paddingSizes[padding]};
    line-height: 15px;
    transition: background-color 0.25s ease-out;
    cursor: ${isDisabled ? 'default' : null};
    height: ${withHeight ? '50px' : null};

    &:hover {
      background-color: ${variantStyle.backgroundHover};
    }

    &:focus {
      box-shadow: 0 0 10px 2px ${variantStyle.focus}90;
      outline: dashed 2px ${variantStyle.focus}30;
    }

    &:disabled {
      background-color: ${variantStyle.backgroundDisabled};
      color: ${variantStyle.colorDisabled};
    }

    ${mq.small} {
      width: ${fullWidthOnSmall ? '100%' : null};
      border-radius: ${fullWidthOnSmall ? '0' : null};
    }
  `;

  return (
    // eslint doesn't allow dynamic button type
    // eslint-disable-next-line react/button-has-type
    <button
      type={buttonType}
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
  onClick: PropTypes.func,
  /** Texto del botón */
  text: PropTypes.string.isRequired,
  /** Indicates that is disabled */
  isLoading: PropTypes.bool,
  /** Select font size: `S=11px`, `S=13px`, `M=15px`, `L=16px`, `XL=18px` `XXL=20px`, */
  fontSize: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Select padding size: `S=11px`, `S=0 5px`, `M=5px 15px`, `L=10px 25px` */
  padding: PropTypes.oneOf(['S', 'M', 'L']),
  /** Select padding size: `S=11px`, `S=0 5px`, `M=5px 15px`, `L=10px 25px` */
  buttonType: PropTypes.oneOf(['button', 'submit']),
  /** Muestra el botón con 100% de ancho en pantallas pequeñas */
  fullWidthOnSmall: PropTypes.bool,
  /** Agrega una altura de 50px */
  withHeight: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  variant: 'default',
  isDisabled: false,
  isLoading: false,
  fontSize: 'M',
  padding: 'L',
  buttonType: 'button',
  fullWidthOnSmall: false,
  withHeight: false,
};

export default Button;
