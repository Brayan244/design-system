import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import Text from '../atoms/Text';
import CreditCardIcon from '../atoms/CreditCardIcon';
import FlatButton from '../atoms/FlatButton';

const CreditCardItem = ({ text, cardBrand, buttonText, onDelete }) => {
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
        <CreditCardIcon cardBrand={cardBrand} />
        <Text size="M">{text}</Text>
      </div>

      <div css={cardLink}>
        <FlatButton text={buttonText} onClick={onDelete} type="error" />
      </div>
    </div>
  );
};

CreditCardItem.propTypes = {
  /** Text of delete button */
  buttonText: PropTypes.string.isRequired,

  /** Card brand */
  cardBrand: PropTypes.string,

  /** Delete card callback */
  onDelete: PropTypes.func.isRequired,

  /** Card item text */
  text: PropTypes.string.isRequired,
};

CreditCardItem.defaultProps = {
  cardBrand: '',
};

export default CreditCardItem;
