import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import Text from '../atoms/Text';
import CreditCardIcon from '../atoms/CreditCardIcon';
import * as mq from '../globals/mediaqueries';

const RadioItem = ({
  textRight,
  textLeft,
  name,
  value,
  cardBrand,
  isActive,
  hasIcon,
  onChange,
}) => {
  const radioContent = css`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  `;

  const wrapper = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  `;

  const wrapperInner = css`
    display: flex;
    align-items: center;

    ${mq.small} {
      p {
        display: ${textRight ? 'none' : 'block'};
      }
    }
  `;

  const oval = css`
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: ${isActive
      ? `9px solid ${colors.accent}`
      : `1px solid ${colors.gray300}`};
    margin-right: 15px;

    input[type='radio'] {
      visibility: hidden;
    }
  `;

  const radioText = css`
    display: block;

    ${mq.small} {
      display: inline-block;
    }
  `;

  return (
    <label css={radioContent}>
      <div css={oval}>
        <input
          name={name}
          type="radio"
          value={value}
          checked={isActive}
          onChange={onChange}
        />
      </div>
      <div css={wrapper}>
        <div css={wrapperInner}>
          {hasIcon && <CreditCardIcon cardBrand={cardBrand} hideBorder />}
          {Boolean(textLeft) && (
            <div css={radioText}>
              <Text
                size="S"
                color={isActive ? 'accent' : 'grayMedium'}
                weight="semibold"
              >
                {textLeft}
              </Text>
            </div>
          )}
        </div>
        {Boolean(textRight) && (
          <Text
            size="S"
            color={isActive ? 'accent' : 'grayMedium'}
            weight="semibold"
          >
            {textRight}
          </Text>
        )}
      </div>
    </label>
  );
};

RadioItem.propTypes = {
  /** Texto izquierdo del Radio Item */
  textLeft: PropTypes.string,

  /** Texto derecho del Radio Item */
  textRight: PropTypes.string,

  /** value del input */
  value: PropTypes.string.isRequired,

  /** name del input */
  name: PropTypes.string.isRequired,

  /** Cambia a mastercard, visa, y amex */
  cardBrand: PropTypes.string,

  /** Activa el componente */
  isActive: PropTypes.bool,

  /** Oculta mastercard, visa y amex */
  hasIcon: PropTypes.bool,

  /** Evento onChange del input * */
  onChange: PropTypes.func.isRequired,
};

RadioItem.defaultProps = {
  textLeft: '',
  textRight: '',
  cardBrand: '',
  isActive: false,
  hasIcon: true,
};

export default RadioItem;
