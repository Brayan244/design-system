import React, { useState } from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import InputLabel from '../atoms/FieldLabel';
import inputBaseStyles from '../base/input.styles';

const Input = ({ isDisabled, id, label, type, value, onChange, hasError }) => {
  const [isFocused, setIsFocused] = useState(false);

  const container = css`
    margin-top: 15px;
    position: relative;
  `;

  const inputStyles = inputBaseStyles(isDisabled, hasError);

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

      <InputLabel
        inputId={id}
        isPlaceholder={!value && !isFocused}
        text={label}
      />
    </div>
  );
};

Input.propTypes = {
  /** Indicates the `<input>` field has an error */
  hasError: PropTypes.bool,
  /** The id attribute specifies a unique `id` */
  id: PropTypes.string.isRequired,
  /** Indicates the `<input>` field is disabled */
  isDisabled: PropTypes.bool,
  /** The label of the `<input>` */
  label: PropTypes.string.isRequired,
  /** Called with the new value */
  onChange: PropTypes.func.isRequired,
  /** Specifies the type `<input>` element to display */
  type: PropTypes.oneOf(['text', 'tel', 'email']),
  /** Defines a value for the `<input>` */
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  hasError: false,
  isDisabled: false,
  type: 'text',
};

export default Input;
