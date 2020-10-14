import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import FieldLabel from '../atoms/FieldLabel';
import inputBaseStyles from '../base/input.styles';
import Text from '../atoms/Text';

const Input = ({
  isDisabled,
  id,
  label,
  placeholderOnly,
  type,
  value,
  onChange,
  hasError,
  maxLength,
  name,
  onFocus,
  onBlur,
  errorMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const container = css`
    margin-top: ${placeholderOnly ? null : '20px'};
    position: relative;
  `;

  const feedbackMessage = css`
    position: absolute;
    bottom: -20px;
    left: 15px;
  `;

  const inputStyles = inputBaseStyles(isDisabled, hasError);

  const labelIsPlaceholder = !isDisabled && !value && !isFocused;

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
        {hasError && (
          <div css={feedbackMessage}>
            <Text size="XS" color="error">
              {errorMessage}
            </Text>
          </div>
        )}

        {(!placeholderOnly || labelIsPlaceholder) && (
          <FieldLabel
            inputId={id}
            isPlaceholder={labelIsPlaceholder}
            text={label}
            hasError={hasError}
          />
        )}
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
  label: PropTypes.string,
  /** If true, the label will only be used as a placeholder */
  placeholderOnly: PropTypes.bool,
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Defines the input max length */
  maxLength: PropTypes.number,
  /** Displays the error message */
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  hasError: false,
  isDisabled: false,
  type: 'text',
  maxLength: null,
  name: '',
  label: null,
  placeholderOnly: false,
  onFocus: () => {},
  onBlur: () => {},
  errorMessage: '',
};

export default Input;
