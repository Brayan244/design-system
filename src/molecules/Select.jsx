import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import inputBaseStyles from '../base/input.styles';
import iconDropDown from '../../images/icons/arrow-dropdown.svg';
import FieldLabel from '../atoms/FieldLabel';

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
  const inputStyles = inputBaseStyles(isDisabled, hasError);

  const selectWrapper = css`
    margin-top: 15px;
    position: relative;
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
    <div css={selectWrapper}>
      {!isDisabled && <div css={iconStyle} />}

      <select
        id={id}
        css={inputStyles}
        onChange={onChange}
        value={value}
        disabled={isDisabled}
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
