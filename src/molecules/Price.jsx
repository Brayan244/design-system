import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Text from '../atoms/Text';
import formatCurrency from '../utils/formatCurrency';

const Price = ({ weight, size, price, currency, color }) => {
  const currencyText = css`
    text-transform: uppercase;
  `;

  return (
    <Text elementType="span" size={size} weight={weight} color={color}>
      {`${formatCurrency(price)}`}
      <small css={currencyText}>{currency}</small>
    </Text>
  );
};

Price.propTypes = {
  /** Amount price */
  price: PropTypes.number.isRequired,
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
  ]),
  /** Font size */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Font weight */
  weight: PropTypes.oneOf(['bold', 'semibold', 'regular']),
};

Price.defaultProps = {
  currency: 'mxn',
  color: 'grayStrong',
  size: 'M',
  weight: 'regular',
};

export default Price;
