/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useRef } from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';
import globalStyles from '../globals/reset';
import iconDropDown from '../../images/icons/arrow-dropdown.svg';
import triggerOnChange from '../utils/triggerOnChange';

const defaultOption = {
  value: '',
  label: '',
};

const Select = ({ id, label, placeholder, options, onChange, value }) => {
  const selectRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const selectedOption =
    options.find(option => option.value === value) || defaultOption;

  const wrapper = css`
    margin-top: 15px;
    position: relative;
  `;

  const select = css`
    display: none;
  `;

  const inputText = css`
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    border-bottom: 1px solid ${colors.gray200};
    width: 100%;
    color: ${colors.gray400};
    font-size: ${typography.sizeM};
    padding: 0 15px;
    display: block;
    user-select: none;
    z-index: 1;
    height: 50px;

    &:focus {
      border-color: ${colors.accent};
      box-shadow: 0 1px 0 0 ${colors.accent};
    }
  `;

  const labelStyle = css`
    color: ${colors.gray400};
    cursor: text;
    position: absolute;
    font-family: 'Open Sans', sans-serif;
    top: 0;
    left: 15px;
    font-size: ${typography.sizeS};
    transform: translateY(-17px);
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

  const onOptionClick = option => {
    triggerOnChange(selectRef, option.value);
    setIsActive(false);
  };

  return (
    <>
      <Global styles={globalStyles} />
      <div css={wrapper}>
        <input
          css={inputText}
          type="text"
          readOnly
          placeholder={placeholder}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          value={selectedOption.label}
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
        <select
          tabIndex="-1"
          id={id}
          css={select}
          ref={selectRef}
          onChange={onChange}
          defaultValue=""
          value={selectedOption.value}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div css={iconStyle} />
        <label htmlFor={id} css={labelStyle}>
          {label}
        </label>
      </div>
    </>
  );
};

Select.propTypes = {
  /** The id attribute specifies a unique `id` */
  id: PropTypes.string.isRequired,
  /** The label of the `<input>` */
  label: PropTypes.string.isRequired,
  /** The placeholder of the `<input>` */
  placeholder: PropTypes.string.isRequired,
  /** Array of options that populate the select menu */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  /** Callback that handle select changes */
  onChange: PropTypes.func.isRequired,
  /** Current value */
  value: PropTypes.string.isRequired,
};

export default Select;
