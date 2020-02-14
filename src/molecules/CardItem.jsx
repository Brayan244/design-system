import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import Text from '../atoms/Text';
import Link from '../atoms/Link';
import CardIcon from '../atoms/CardIcon';

const CardItem = ({ text, cardBrand }) => {
  const cardStyle = css`
    display: flex;
    align-items: center;
    flex: 1;
    border-right: 1px solid ${colors.gray200};
    padding: 15px 10px;
  `;

  const cardLink = css`
    padding: 0 15px;
  `;

  const cardContainer = css`
    width: 100%;
    background-color: ${colors.gray100};
    border: 1px solid ${colors.gray200};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  return (
    <div css={cardContainer}>
      <div css={cardStyle}>
        <CardIcon cardBrand={cardBrand} />
        <Text size="M">{text}</Text>
      </div>

      <div css={cardLink}>
        <Link text="Eliminar" href="https://www.reservamos.mx/" type="error" />
      </div>
    </div>
  );
};

CardItem.propTypes = {
  /** Texto del Card Item */
  text: PropTypes.string.isRequired,

  /** Cambia a mastercard, visa, y amex */
  cardBrand: PropTypes.string,
};

CardItem.defaultProps = {
  cardBrand: '',
};

export default CardItem;
