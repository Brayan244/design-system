import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import Icon from './Icon';

const variantStyles = {
  accent: {
    background: colors.accent,
    backgroundDisabled: colors.gray400,
    backgroundHover: colors.accentStrong,
    focus: colors.accent,
  },
  noFill: {
    background: '#ffffff',
    backgroundDisabled: '#ffffff',
    backgroundHover: colors.gray100,
    focus: colors.accent,
  },
  primary: {
    background: colors.primary,
    backgroundHover: colors.primaryStrong,
    backgroundDisabled: colors.gray400,
    focus: colors.primaryStrong,
  },
};

const paddingSizes = {
  L: '10px 25px',
  M: '5px 15px',
  S: '0 5px',
};

const IconButton = ({
  buttonType,
  variant,
  isDisabled,
  onClick,
  padding,
  iconType,
  iconSize,
}) => {
  const variantStyle = variantStyles[variant];

  const ButtonStyle = css`
    background-color: ${variantStyle.background};
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    min-height: 35px;
    min-width: 35px;
    padding: ${paddingSizes[padding]};
    transition: background-color 0.25s ease-out;
    cursor: ${isDisabled ? 'default' : null};

    &:hover {
      background-color: ${variantStyle.backgroundHover};
    }

    &:focus {
      box-shadow: 0 0 10px 2px ${variantStyle.focus}90;
      outline: dashed 2px ${variantStyle.focus}30;
    }

    &:disabled {
      background-color: ${variantStyle.backgroundDisabled};

      > div {
        opacity: 0.3;
      }
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
      <Icon size={iconSize} type={iconType} />
    </button>
  );
};

IconButton.propTypes = {
  /** Set the button variant */
  variant: PropTypes.oneOf(['accent', 'noFill', 'primary']),
  /** Indicates that is disabled */
  isDisabled: PropTypes.bool,
  /** Callback onClick */
  onClick: PropTypes.func,
  /** Select padding size: `S=11px`, `S=0 5px`, `M=5px 15px`, `L=10px 25px` */
  padding: PropTypes.oneOf(['S', 'M', 'L']),
  /** Indicates button type */
  buttonType: PropTypes.oneOf(['button', 'submit']),
  /** Indicates the icon's name to display on button */
  iconType: PropTypes.string,
  /** Select icon size `S=15px`, `M=25px`, `L=35px` */
  iconSize: PropTypes.oneOf(['S', 'M', 'L']),
};

IconButton.defaultProps = {
  onClick: () => {},
  variant: 'noFill',
  isDisabled: false,
  padding: 'S',
  buttonType: 'button',
  iconType: 'checkmarkWhite',
  iconSize: 'S',
};

export default IconButton;
