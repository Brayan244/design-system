import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as mq from '../globals/mediaqueries';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';
import LoaderButton from '../molecules/LoaderButton';
import Icon from '../atoms/Icon';

const variantStyles = {
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
  primary: {
    background: colors.primary,
    backgroundHover: colors.primaryStrong,
    backgroundDisabled: colors.gray400,
    color: '#ffffff',
    colorDisabled: '#ffffff',
    focus: colors.primaryStrong,
  },
  infoLight: {
    background: '#d2f2ff',
    backgroundHover: '#a8dcf1',
    backgroundDisabled: colors.gray400,
    color: colors.gray600,
    colorDisabled: '#ffffff',
    focus: '#a8dcf1',
  },
};

const paddingSizes = {
  L: '10px 25px',
  M: '5px 15px',
  S: '5px',
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
  isRounded,
  iconType,
  fontWeight,
  disableMinHeight,
}) => {
  if (isLoading)
    return (
      <LoaderButton isNoFill={variant !== 'accent' && variant !== 'discount'} />
    );

  const variantStyle = variantStyles[variant];

  const ButtonStyle = css`
    align-items: center;
    background-color: ${variantStyle.background};
    border-radius: ${isRounded ? '50px' : '4px'};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: ${variantStyle.color};
    display: flex;
    font-family: 'Open Sans', sans-serif;
    font-weight: ${typography[fontWeight]};
    font-size: ${typography[fontSize]};
    justify-content: center;
    min-height: ${disableMinHeight ? null : '35px'};
    min-width: 100px;
    padding: ${paddingSizes[padding]};
    line-height: 15px;
    transition: background-color 0.25s ease-out;
    cursor: ${isDisabled ? 'default' : null};
    height: ${withHeight ? '50px' : null};
    position: relative;

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
      {Boolean(iconType) && <Icon size="S" type={iconType} hasMargin />}
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
    'primary',
    'infoLight',
  ]),
  /** Indicates that is disabled */
  isDisabled: PropTypes.bool,
  /** Callback onClick */
  onClick: PropTypes.func,
  /** Texto del botón */
  text: PropTypes.string.isRequired,
  /** Indicates that is disabled */
  isLoading: PropTypes.bool,
  /** Select font size: `XS=11px`, `S=14px`, `M=16px`, `L=17px`, `XL=18px`, `XLL=20px` */
  fontSize: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Select padding size: `S=5px`, `M=5px 15px`, `L=10px 25px` */
  padding: PropTypes.oneOf(['S', 'M', 'L']),
  /** Indicates button type */
  buttonType: PropTypes.oneOf(['button', 'submit']),
  /** Muestra el botón con 100% de ancho en pantallas pequeñas */
  fullWidthOnSmall: PropTypes.bool,
  /** Agrega una altura de 50px */
  withHeight: PropTypes.bool,
  /** Indicates if button is rounded */
  isRounded: PropTypes.bool,
  /** Indicates the icon's name to display on button */
  iconType: PropTypes.string,
  /** Select font size: `bold`, `semibold`, `regular`, */
  fontWeight: PropTypes.oneOf(['bold', 'semibold', 'regular']),
  /** Deshabilita la propiedad min-height */
  disableMinHeight: PropTypes.bool,
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
  isRounded: false,
  iconType: '',
  fontWeight: 'bold',
  disableMinHeight: false,
};

export default Button;
