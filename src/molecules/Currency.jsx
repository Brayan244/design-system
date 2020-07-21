import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Text from '../atoms/Text';
import formatCurrency from '../utils/formatCurrency';

const Currency = ({
  weight,
  size,
  price,
  decimals,
  currency,
  color,
  lineThrough,
}) => {
  const currencyText = css`
    text-transform: uppercase;
  `;

  return (
    <Text
      elementType="span"
      size={size}
      weight={weight}
      color={color}
      lineThrough={lineThrough}
    >
      {`${formatCurrency(price, decimals)} `}
      <small css={currencyText}>{currency}</small>
    </Text>
  );
};

Currency.propTypes = {
  /** Amount price */
  price: PropTypes.number.isRequired,
  /** Defines how much decimals to show */
  decimals: PropTypes.number,
  /** Sets currency */
  currency: PropTypes.string,
  /** Color */
  color: PropTypes.oneOf([
    'primary',
    'accent',
    'grayStrong',
    'grayMedium',
    'grayLight',
    'info',
    'discount',
    'white',
  ]),
  /** Font size */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Font weight */
  weight: PropTypes.oneOf(['bold', 'semibold', 'regular']),
  /** Sets the `line-through` decoration */
  lineThrough: PropTypes.bool,
};

Currency.defaultProps = {
  currency: '',
  decimals: 2,
  color: 'grayStrong',
  size: 'M',
  weight: 'regular',
  lineThrough: false,
};

export default Currency;
