import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import Currency from './Currency';

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
    color: 'grayMedium',
    size: 'L',
    weightLeft: 'semibold',
    weightRight: 'semibold',
  },
  strong: {
    color: 'grayStrong',
    size: 'M',
    weightLeft: 'regular',
    weightRight: 'semibold',
  },
  big: {
    color: 'grayStrong',
    size: 'XXL',
    weightLeft: 'regular',
    weightRight: 'bold',
  },
};

const ListItem = ({
  type,
  textLeft,
  hasNotice,
  textRight,
  price,
  currency,
  paddingHorizontal,
  paddingVertical,
}) => {
  const listItemStyle = css`
    display: flex;
    justify-content: space-between;
    padding: ${paddingVertical}px ${paddingHorizontal}px;
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
          {textLeft}
        </Text>
        {Boolean(hasNotice) && (
          <div css={listItemIcon}>
            <Icon size="S" type="badgeQuestion" />
          </div>
        )}
      </div>
      {price ? (
        <Currency
          size={Types[type].size}
          color={Types[type].color}
          weight={Types[type].weightRight}
          price={price}
          currency={currency}
        />
      ) : (
        <Text
          size={Types[type].size}
          color={Types[type].color}
          weight={Types[type].weightRight}
        >
          {textRight}
        </Text>
      )}
    </div>
  );
};

ListItem.propTypes = {
  /** Tipo de texto */
  type: PropTypes.oneOf([
    'default',
    'accent',
    'main',
    'accentBold',
    'strong',
    'big',
  ]),

  /** Para editar el texto de la izquierda y más largo */
  textLeft: PropTypes.string.isRequired,

  /** Texto del lado derecho */
  textRight: PropTypes.string,

  /** Texto del precio */
  price: PropTypes.number,

  /** Tipo del tipo de moneda */
  currency: PropTypes.string,

  /** Aparece el badgeQuestion */
  hasNotice: PropTypes.bool.isRequired,

  /** Determina el valor del padding horizontal */
  paddingHorizontal: PropTypes.number,

  /** Determina el valor del padding vertical */
  paddingVertical: PropTypes.number,
};

ListItem.defaultProps = {
  type: 'default',
  textRight: '',
  price: null,
  currency: '',
  paddingVertical: 15,
  paddingHorizontal: 15,
};

export default ListItem;
