import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

const iconTypes = {
  normal: {
    color: 'grayLight',
    size: 'M',
    weight: 'regular',
  },
  accent: {
    color: 'accent',
    size: 'M',
    weight: 'regular',
  },
  main: {
    color: 'gray500',
    size: 'L',
    weight: 'semibold',
  },
};

const ListItem = ({ type, text, price, currency, hasNotice }) => {
  const listItemStyle = css`
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
  `;

  const listItemContent = css`
    display: flex;
    align-items: center;

    p {
      margin-right: 10px;
    }
  `;

  const listItemIcon = css`
    display: ${hasNotice ? 'block' : 'none'};
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <div css={listItemStyle}>
        <div css={listItemContent}>
          <Text
            size={iconTypes[type].size}
            color={iconTypes[type].color}
            weight={iconTypes[type].weight}
          >
            {text}
          </Text>
          <div css={listItemIcon}>
            <Icon size="S" type="badgeQuestion" />
          </div>
        </div>
        <Text
          size={iconTypes[type].size}
          color={iconTypes[type].color}
          weight={iconTypes[type].weight}
        >
          {`$${price}${currency}`}
        </Text>
      </div>
    </>
  );
};

ListItem.propTypes = {
  /** Tipo de texto */
  type: PropTypes.oneOf(['normal', 'accent', 'main']).isRequired,

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
