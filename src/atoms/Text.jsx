import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';

const tones = {
  primary: colors.primary,
  accent: colors.accent,
  grayStrong: colors.gray600,
  grayMedium: colors.gray500,
  grayLight: colors.gray400,
  info: colors.info,
  discount: colors.discount,
  white: colors.white,
};

const weights = {
  regular: typography.regular,
  semibold: typography.semibold,
  bold: typography.bold,
};

const sizes = {
  XS: typography.sizeXS,
  S: typography.sizeS,
  M: typography.sizeM,
  L: typography.sizeL,
  XL: typography.sizeXL,
  XXL: typography.sizeXXL,
};

const Text = ({ children, size, weight, color, elementType, lineThrough }) => {
  const BodyElement = elementType;

  const textStyle = css`
    font-family: 'Open Sans', sans-serif;
    color: ${tones[color]};
    font-size: ${sizes[size]};
    font-weight: ${weights[weight]};
    text-decoration: ${lineThrough ? 'line-through' : 'none'};
  `;

  return <BodyElement css={textStyle}>{children}</BodyElement>;
};

Text.propTypes = {
  /** `HTML` element */
  elementType: PropTypes.oneOf(['p', 'span']),
  children: PropTypes.node.isRequired,
  /** Text color */
  color: PropTypes.oneOf([
    'primary',
    'accent',
    'grayStrong',
    'grayMedium',
    'grayLight',
    'info',
    'discount',
  ]),
  /** Font weight */
  weight: PropTypes.oneOf(['bold', 'semibold', 'regular']),
  /** Font size */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Sets the `line-through` decoration */
  lineThrough: PropTypes.bool,
};

Text.defaultProps = {
  elementType: 'p',
  color: 'grayStrong',
  weight: 'regular',
  size: 'M',
  lineThrough: false,
};

export default Text;
