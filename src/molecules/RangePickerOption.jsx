import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

const RangePickerOption = ({ option, isActive, onClick }) => {
  const container = css`
    display: flex;
    align-items: center;
    background-color: ${isActive ? `${colors.primary}10` : '#ffffff'};
    border-color: ${isActive ? colors.primary : '#ffffff'};
    border-width: 1px;
    border-style: solid;
    flex-direction: column;
    height: 50px;
    width: 50px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    padding: 5px;
    justify-content: space-between;
    transition: background-color 200ms ease-out;

    &:hover {
      background-color: ${colors.gray200};
      cursor: pointer;
    }
  `;

  function handleClick() {
    onClick(option);
  }

  return (
    <button type="button" onClick={handleClick} css={container}>
      <Icon size="S" type={isActive ? 'starFullPrimary' : 'starEmpty'} />
      <Text size="S">{option}</Text>
    </button>
  );
};

RangePickerOption.propTypes = {
  option: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

RangePickerOption.defaultProps = {
  isActive: false,
};

export default RangePickerOption;
