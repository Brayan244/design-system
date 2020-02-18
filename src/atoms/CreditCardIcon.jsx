import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import mastercard from '../../images/master.svg';
import visa from '../../images/visa.svg';
import amex from '../../images/amex.png';
import card from '../../images/icons/credit-card.svg';

function brands(type) {
  switch (type) {
    case 'visa':
      return visa;
    case 'mastercard':
      return mastercard;
    case 'amex':
      return amex;
    default:
      return card;
  }
}

const CreditCardIcon = ({ cardBrand, hasMargin, hideBorder }) => {
  const cardIconStyle = css`
    margin-right: ${hasMargin ? '15px' : '0'};
    background-color: #ffffff;
    border: ${hideBorder ? '0' : '1px'} solid #ebebeb;
    border-radius: 2px;
    width: 40px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const logo = css`
    height: 19px;
    width: 30px;
    background-image: url(${brands(cardBrand)});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
  `;

  return (
    <div css={cardIconStyle}>
      <i css={logo} />
    </div>
  );
};

CreditCardIcon.propTypes = {
  /** Cambia a mastercard, visa, y amex */

  cardBrand: PropTypes.string,

  /** Agrega un margen left: 10px y right: 15px */
  hasMargin: PropTypes.bool,

  /** Ocultar el logo en mobile */
  hideBorder: PropTypes.bool,
};

CreditCardIcon.defaultProps = {
  cardBrand: '',
  hasMargin: true,
  hideBorder: false,
};

export default CreditCardIcon;
