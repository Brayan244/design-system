import React, { useState } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import InputLabel from '../atoms/FieldLabel';
import inputBaseStyles from '../base/input.styles';

const Input = ({
  isDisabled,
  id,
  label,
  type,
  value,
  onChange,
  hasError,
  maxLength,
  name,
  onFocus,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const container = css`
    margin-top: 20px;
    position: relative;
  `;

  const inputStyles = inputBaseStyles(isDisabled, hasError);

  const handleFocus = event => {
    setIsFocused(true);
    onFocus(event);
  };

  const handleBlur = event => {
    setIsFocused(false);
    onBlur(event);
  };

  return (
    <div>
      <div css={container}>
        <input
          id={id}
          type={type}
          css={inputStyles}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={isDisabled}
          maxLength={maxLength}
          name={name}
        />

        <InputLabel
          inputId={id}
          isPlaceholder={!isDisabled && !value && !isFocused}
          text={label}
        />
      </div>
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
  /** The name value of the `<input>` */
  name: PropTypes.string,
  /** Called with the new value */
  onChange: PropTypes.func.isRequired,
  /** Handle focus events on the control */
  onFocus: PropTypes.func,
  /** Handle blur events on the control */
  onBlur: PropTypes.func,
  /** Specifies the type `<input>` element to display */
  type: PropTypes.oneOf(['text', 'tel', 'email']),
  /** Defines a value for the `<input>` */
  value: PropTypes.string.isRequired,
  /** Defines the input max length */
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  hasError: false,
  isDisabled: false,
  type: 'text',
  maxLength: null,
  name: '',
  onFocus: () => {},
  onBlur: () => {},
};

export default Input;
