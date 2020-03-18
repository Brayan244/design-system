import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

const Types = {
  default: {
    color: 'grayLight',
    size: 'M',
    weightLeft: 'regular',
    weightRight: 'regular',
  },
  accent: {
    color: 'accent',
    size: 'M',
    weightLeft: 'regular',
    weightRight: 'regular',
  },
  accentBold: {
    color: 'accent',
    size: 'S',
    weightLeft: 'semibold',
    weightRight: 'bold',
  },
  main: {
    color: 'gray500',
    size: 'L',
    weightLeft: 'semibold',
    weightRight: 'semibold',
  },
};

const ListItem = ({ type, text, price, currency, hasNotice }) => {
  const listItemStyle = css`
    display: flex;
    justify-content: space-between;
    padding: ${type === 'accentBold' ? '15px' : '5px 15px'};
  `;

  const listItemContent = css`
    display: flex;
    align-items: center;
  `;

  const listItemIcon = css`
    margin-left: 10px;
  `;

  return (
    <div css={listItemStyle}>
      <div css={listItemContent}>
        <Text
          size={Types[type].size}
          color={Types[type].color}
          weight={Types[type].weightLeft}
        >
          {text}
        </Text>
        {Boolean(hasNotice) && (
          <div css={listItemIcon}>
            <Icon size="S" type="badgeQuestion" />
          </div>
        )}
      </div>
      <Text
        size={Types[type].size}
        color={Types[type].color}
        weight={Types[type].weightRight}
      >
        {`$${price}${currency}`}
      </Text>
    </div>
  );
};

ListItem.propTypes = {
  /** Tipo de texto */
  type: PropTypes.oneOf(['default', 'accent', 'main', 'accentBold']).isRequired,

  /** Para editar el texto principal y más largo */
  text: PropTypes.string.isRequired,

  /** Texto del precio */
  price: PropTypes.number.isRequired,

  /** Tipo de peso */
  currency: PropTypes.string.isRequired,

  /** Aparece el badgeQuestion */
  hasNotice: PropTypes.bool.isRequired,
};

export default ListItem;
