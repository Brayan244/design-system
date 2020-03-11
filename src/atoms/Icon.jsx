import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import * as icons from '../icons/index';

const iconSizes = {
  S: 15,
  M: 25,
  L: 35,
  XL: 45,
};

const Icon = ({ size, hasMargin, type, margin }) => {
  const styles = css`
    background-image: url(${icons[type]});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: ${iconSizes[size]}px;
    margin-right: ${hasMargin ? `${margin}px` : 0};
    width: ${iconSizes[size]}px;
    min-width: ${iconSizes[size]}px;
  `;

  return <div css={styles} />;
};

Icon.propTypes = {
  /** Select size: `S=15px`, `M=25px`, `L=35px`, `XL=45px`  */
  size: PropTypes.oneOf(['S', 'M', 'L', 'XL']).isRequired,
  /** Icon type */
  type: PropTypes.string.isRequired,
  /** Adds `margin-right: 10px` */
  hasMargin: PropTypes.bool,
  /** Adds custom `margin-right` */
  margin: PropTypes.number,
};

Icon.defaultProps = {
  hasMargin: false,
  margin: 10,
};

export default Icon;
