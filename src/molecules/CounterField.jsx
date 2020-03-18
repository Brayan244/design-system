import React, { useState, useRef } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import * as colors from '../tokens/colors';
import triggerOnChange from '../utils/triggerOnChange';

const CounterField = ({ initialCount, minCount, maxCount, onChange }) => {
  const calculateInitialCount = () => {
    if (initialCount < minCount) return minCount;
    if (initialCount > maxCount) return maxCount;
    return initialCount;
  };

  const [count, setCount] = useState(calculateInitialCount());
  const hiddenInputRef = useRef();

  const quantityContent = css`
    display: flex;

    p {
      margin: 0 15px;
    }
  `;

  const button = css`
    background-color: ${colors.gray200};
    display: inline-block;
    border-radius: 3px;
    height: 30px;
    width: 30px;
    justify-content: center;
  `;

  const hiddenInput = css`
    display: none;
  `;

  const incrementCount = () => {
    const newValue = count + 1;
    if (maxCount && newValue > maxCount) return;

    setCount(newValue);
    triggerOnChange(hiddenInputRef, newValue);
  };

  const decrementCount = () => {
    const newValue = count - 1;
    if (newValue < minCount) return;

    setCount(newValue);
    triggerOnChange(hiddenInputRef, newValue);
  };

  return (
    <div css={quantityContent}>
      <button type="button" css={button} onClick={decrementCount}>
        <Icon size="S" type="less" />
      </button>
      <Text size="XL" weight="semibold">
        {count}
      </Text>
      <button type="button" css={button} onClick={incrementCount}>
        <Icon size="S" type="plus" />
      </button>
      <input
        type="text"
        css={hiddenInput}
        onChange={onChange}
        ref={hiddenInputRef}
      />
    </div>
  );
};

CounterField.propTypes = {
  /** Initial Count  */
  initialCount: PropTypes.number.isRequired,
  /** Minimum Count */
  minCount: PropTypes.number,
  /** Maximum Count */
  maxCount: PropTypes.number,
  /** onChange callback, returns current count */
  onChange: PropTypes.func.isRequired,
};

CounterField.defaultProps = {
  minCount: 0,
  maxCount: null,
};

export default CounterField;
