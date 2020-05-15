import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as mq from '../globals/mediaqueries';
import Spacing from '../atoms/Spacing';
import Text from '../atoms/Text';
import Currency from './Currency';

const ListItem = ({ isMain, textLeft, textRight, isMoney, currency }) => {
  const listItemStyle = css`
    padding: 5px 0;
  `;

  const leftItem = css`
    flex: 1;

    ${mq.small} {
      max-width: 100px;
    }
  `;

  const rightItem = css`
    flex: 2;
  `;

  return (
    <div css={listItemStyle}>
      <Spacing justifyContent="space-between" alignItems="center">
        <div css={leftItem}>
          <Text size={isMain ? 'XXL' : 'M'}>{textLeft}</Text>
        </div>
        <div css={rightItem}>
          {isMoney ? (
            <Currency
              size={isMain ? 'XXL' : 'M'}
              weight={isMain ? 'bold' : 'semibold'}
              price={Number(textRight)}
              currency={currency}
            />
          ) : (
            <Text
              size={isMain ? 'XXL' : 'M'}
              weight={isMain ? 'bold' : 'semibold'}
            >
              {textRight}
            </Text>
          )}
        </div>
      </Spacing>
    </div>
  );
};

ListItem.propTypes = {
  /** Tipo de texto */
  isMain: PropTypes.bool,
  /** Para editar el texto de la izquierda y más largo */
  textLeft: PropTypes.string,
  /** Texto del lado derecho */
  textRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Usa `<Currency />` en lugar de `<Text />` */
  isMoney: PropTypes.bool,
  /** Tipo del tipo de moneda */
  currency: PropTypes.string,
};

ListItem.defaultProps = {
  isMain: false,
  textLeft: '',
  textRight: '',
  isMoney: false,
  currency: '',
};

export default ListItem;
