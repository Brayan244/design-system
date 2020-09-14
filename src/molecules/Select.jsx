import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import inputBaseStyles from '../base/input.styles';
import iconDropDown from '../../images/icons/arrows/select.svg';
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
  name,
  onFocus,
  onBlur,
}) => {
  const inputStyles = inputBaseStyles(isDisabled, hasError);

  const selectWrapper = css`
    margin-top: ${label ? '20px' : null};
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
    transition: visibility 0.3s;
    visibility: ${isDisabled ? 'hidden' : 'visible'};
  `;

  return (
    <div>
      <div css={selectWrapper}>
        <div css={iconStyle} />

        <select
          id={id}
          css={inputStyles}
          onChange={onChange}
          value={value}
          disabled={isDisabled}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
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
        {Boolean(label) && <FieldLabel inputId={id} text={label} />}
      </div>
    </div>
  );
};

Select.propTypes = {
  /** Indicates the `<select>` field has an error */
  hasError: PropTypes.bool,
  /** The id attribute specifies a unique `id` */
  id: PropTypes.string.isRequired,
  /** The name value of the `<select>` */
  name: PropTypes.string,
  /** Indicates the `<select>` field is disabled */
  isDisabled: PropTypes.bool,
  /** The label of the `<select>` */
  label: PropTypes.string,
  /** Callback that handle select changes */
  onChange: PropTypes.func.isRequired,
  /** Handle focus events on the control */
  onFocus: PropTypes.func,
  /** Handle blur events on the control */
  onBlur: PropTypes.func,
  /** Array of options that populate the select menu */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  /** The placeholder of the `<select>` */
  placeholder: PropTypes.string.isRequired,
  /** Current value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Select.defaultProps = {
  hasError: false,
  isDisabled: false,
  name: '',
  label: '',
  onFocus: () => {},
  onBlur: () => {},
};

export default Select;
