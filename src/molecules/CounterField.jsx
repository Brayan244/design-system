import React, { useState, useRef } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import triggerOnChange from '../utils/triggerOnChange';
import IconButton from '../atoms/IconButton';

const CounterField = ({ initialCount, minCount, maxCount, onChange }) => {
  const calculateInitialCount = () => {
    if (initialCount < minCount) return minCount;
    if (initialCount > maxCount) return maxCount;
    return initialCount;
  };

  const [count, setCount] = useState(calculateInitialCount());
  const hiddenInputRef = useRef();

  const quantityContent = css`
    align-items: center;
    display: flex;

    p {
      margin: 0 15px;
    }
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
      <IconButton iconType="less" variant="noFill" onClick={decrementCount} />
      <Text size="XL" weight="semibold">
        {count}
      </Text>
      <IconButton iconType="plus" variant="noFill" onClick={incrementCount} />
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
