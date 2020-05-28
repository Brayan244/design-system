import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import iconDropDown from '../../images/icons/arrows/select.svg';
import FieldLabel from '../atoms/FieldLabel';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';

const SmallSelect = ({
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
  const errorColor = hasError ? colors.error : null;

  const selectWrapper = css`
    margin-top: ${label ? '20px' : null};
    position: relative;
    padding-right: 20px;
    display: flex;
  `;

  const innerWrapper = css`
    position: relative;
    padding-right: 15px;
  `;

  const selectStyle = css`
    color: ${errorColor || colors.gray600};
    font-size: ${typography.M};
    padding: 0 15px;
    transition: color 0.3s;
    min-width: 120px;

    &:focus {
      color: ${errorColor || colors.accent};
      outline: none;

      & + label {
        color: ${errorColor || colors.accent};
      }
    }

    &:disabled {
      color: ${colors.gray600};
      opacity: 1;
      -webkit-text-fill-color: ${colors.gray600};
    }
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
        <div css={innerWrapper}>
          <div css={iconStyle} />

          <select
            id={id}
            css={selectStyle}
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
        </div>
        {Boolean(label) && <FieldLabel inputId={id} text={label} />}
      </div>
    </div>
  );
};

SmallSelect.propTypes = {
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
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  /** The placeholder of the `<select>` */
  placeholder: PropTypes.string.isRequired,
  /** Current value */
  value: PropTypes.string.isRequired,
};

SmallSelect.defaultProps = {
  hasError: false,
  isDisabled: false,
  name: '',
  label: '',
  onFocus: () => {},
  onBlur: () => {},
};

export default SmallSelect;
