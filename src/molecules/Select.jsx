/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useRef } from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';
import inputBaseStyles from '../base/input.styles';
import globalStyles from '../globals/reset';
import iconDropDown from '../../images/icons/arrow-dropdown.svg';
import triggerOnChange from '../utils/triggerOnChange';
import FieldLabel from '../atoms/FieldLabel';

const defaultOption = {
  value: '',
  label: '',
};

const Select = ({
  hasError,
  id,
  isDisabled,
  label,
  onChange,
  options,
  placeholder,
  value,
}) => {
  const selectRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const selectedOption =
    options.find(option => option.value === value) || defaultOption;

  const onOptionClick = option => {
    triggerOnChange(selectRef, option.value);
    setIsActive(false);
  };

  const inputStyles = inputBaseStyles(isDisabled, hasError);

  const container = css`
    margin-top: 15px;
    position: relative;
  `;

  const select = css`
    display: none;
  `;

  const listItems = css`
    background-color: #ffffff;
    display: 'block';
    min-width: 100px;
    width: 280px;
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: 0 0;
    transform: ${isActive ? 'scaleX(1) scaleY(1)' : 'inherit'};
    z-index: 9999;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  `;

  const listItem = css`
    padding: 14px 16px;
    font-size: ${typography.sizeL};
    color: ${colors.accent};
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  `;

  const disabled = css`
    color: ${colors.gray400};
    background-color: transparent;
  `;

  const selected = css`
    background-color: ${colors.gray100};
  `;

  const iconStyle = css`
    height: 5px;
    width: 12px;
    background-image: url(${iconDropDown});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    right: 15px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  `;

  return (
    <div css={container}>
      <Global styles={globalStyles} />

      <input
        css={inputStyles}
        type="text"
        readOnly
        placeholder={placeholder}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        value={selectedOption.label}
        disabled={isDisabled}
      />

      {isActive && (
        <ul css={listItems}>
          <li
            css={[listItem, disabled, selected]}
            onMouseDown={() => onOptionClick(defaultOption)}
          >
            {placeholder}
          </li>

          {options.map(option => (
            <li
              css={listItem}
              key={option.value}
              onMouseDown={() => onOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {!isDisabled && <div css={iconStyle} />}

      <select
        tabIndex="-1"
        id={id}
        css={select}
        ref={selectRef}
        onChange={onChange}
        value={selectedOption.value}
        disabled={isDisabled}
      >
        <option value={null} disabled>
          {placeholder}
        </option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <FieldLabel inputId={id} text={label} />
    </div>
  );
};

Select.propTypes = {
  /** Indicates the `<input>` field has an error */
  hasError: PropTypes.bool,
  /** The id attribute specifies a unique `id` */
  id: PropTypes.string.isRequired,
  /** Indicates the `<input>` field is disabled */
  isDisabled: PropTypes.bool,
  /** The label of the `<input>` */
  label: PropTypes.string.isRequired,
  /** Callback that handle select changes */
  onChange: PropTypes.func.isRequired,
  /** Array of options that populate the select menu */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  /** The placeholder of the `<input>` */
  placeholder: PropTypes.string.isRequired,
  /** Current value */
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  hasError: false,
  isDisabled: false,
};

export default Select;
