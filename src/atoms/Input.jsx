import React, { useState } from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';
import globalStyles from '../globals/reset';

const Input = ({ id, label, type, value, onChange, hasError, isDisabled }) => {
  const [isFocused, setIsFocused] = useState(false);

  const container = css`
    margin-top: 15px;
    position: relative;
  `;

  const labelActive = css`
    transform: translateY(-14px) scale(0.8);
    transform-origin: 0 0;
  `;

  const inputStyles = css`
    border-bottom: ${isDisabled ? '0' : '1px'} solid
      ${hasError ? colors.error : colors.gray200};
    box-shadow: ${hasError ? `0 1px 0 0 ${colors.error}` : 'inherit'};
    color: ${hasError ? colors.error : colors.gray600};
    height: 50px;
    font-size: 16px;
    transition: border 0.3s, -webkit-box-shadow 0.3s;
    padding: 0 15px;
    width: 100%;

    &:focus {
      border-color: ${hasError ? colors.error : colors.accent};
      box-shadow: 0 1px 0 0 ${hasError ? colors.error : colors.accent};

      & + label {
        color: ${hasError ? colors.error : colors.accent};
      }
    }
  `;

  const labelStyle = css`
    color: ${colors.gray400};
    position: absolute;
    top: 0;
    left: 15px;
    font-size: ${typography.sizeM};
    cursor: text;
    transition: transform 0.2s ease-out, color 0.2s ease-out;
    transform-origin: 0% 100%;
    text-align: initial;
    transform: translateY(15px);
    font-family: 'Open Sans', sans-serif;
    ${Boolean(value) || isFocused ? labelActive : ''}
  `;

  return (
    <div css={container}>
      <Global styles={globalStyles} />
      <input
        id={id}
        type={type}
        css={inputStyles}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={isDisabled}
      />
      <label htmlFor={id} css={labelStyle}>
        {label}
      </label>
    </div>
  );
};

Input.propTypes = {
  /** The id attribute specifies a unique `id` */
  id: PropTypes.string.isRequired,
  /** The label of the `<input>` */
  label: PropTypes.string.isRequired,
  /** Specifies the type `<input>` element to display */
  type: PropTypes.oneOf(['text', 'tel', 'email']),
  /** Defines a value for the `<input>` */
  value: PropTypes.string.isRequired,
  /** Called with the new value */
  onChange: PropTypes.func.isRequired,
  /** Indicates the `<input>` field has an error */
  hasError: PropTypes.bool,
  /** Indicates the `<input>` field is disabled */
  isDisabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  hasError: false,
  isDisabled: false,
};

export default Input;
