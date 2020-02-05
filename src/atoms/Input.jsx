import React, { useState } from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';
import globalStyles from '../globals/reset';

const Input = ({ id, label, type, value, onChange, hasError }) => {
  const [isFocused, setIsFocused] = useState(false);

  const container = css`
    position: relative;
    margin-bottom: 10px;
  `;

  const labelActive = css`
    transform: translateY(-14px) scale(0.8);
    transform-origin: 0 0;
  `;

  const inputStyles = css`
    border-bottom: 1px solid ${hasError ? colors.error : colors.gray200};
    height: 50px;
    color: ${hasError ? colors.error : colors.gray600};
    width: 100%;
    font-size: 16px;
    margin-bottom: 8px;
    transition: border 0.3s, -webkit-box-shadow 0.3s;
    padding: 0 15px;

    &:focus {
      border-color: ${hasError ? colors.error : colors.accent};

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
    ${value.length > 0 || isFocused ? labelActive : ''}
  `;

  return (
    <div css={container}>
      <Global styles={globalStyles} />
      <input
        id={id}
        type={type}
        css={inputStyles}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
};

Input.defaultProps = {
  type: 'text',
  hasError: false,
};

export default Input;
