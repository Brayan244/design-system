import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import FieldLabel from '../atoms/FieldLabel';
import globalDatePicker from '../globals/datepicker.styles';
import globalStyles from '../globals/reset';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import triggerOnChange from '../utils/triggerOnChange';

const parseDate = date => {
  const parsedDate = moment(date, 'YYYY-MM-DD');
  if (parsedDate.format() === 'Invalid date') return null;
  return parsedDate;
};

const DatePicker = ({ isDisabled, hasError, id, label, onChange, value }) => {
  const initialDate = parseDate(value);
  const [date, setDate] = useState(initialDate);
  const [focused, setFocused] = useState(false);
  const hiddenInputRef = useRef();

  const handleDateChange = newDate => {
    setDate(newDate);
    triggerOnChange(hiddenInputRef, newDate);
  };

  const container = css`
    margin-top: 15px;
    position: relative;
  `;

  const hiddenInput = css`
    display: none;
  `;

  return (
    <div css={container}>
      <Global styles={globalStyles} />
      <Global styles={globalDatePicker(isDisabled, hasError)} />

      <SingleDatePicker
        id={id}
        block
        date={date}
        focused={focused}
        disabled={isDisabled}
        displayFormat="YYYY-MM-DD"
        onDateChange={newDate => handleDateChange(newDate)}
        onFocusChange={input => setFocused(input.focused)}
        showClearDate={Boolean(date) && !isDisabled}
        placeholder={null}
        readOnly
        noBorder
        isOutsideRange={() => false}
      />

      <FieldLabel inputId={id} isPlaceholder={!date && !focused} text={label} />

      <input
        type="text"
        css={hiddenInput}
        onChange={onChange}
        ref={hiddenInputRef}
      />
    </div>
  );
};

DatePicker.propTypes = {
  /** Disables de `<DatePicker>` */
  isDisabled: PropTypes.bool,
  /** Indicates if the `<DatePicker>` has an error */
  hasError: PropTypes.bool,
  /** The id attribute specifies a unique `id` */
  id: PropTypes.string.isRequired,
  /** The label for the `<DatePicker>` */
  label: PropTypes.string.isRequired,
  /** Called with the new value when it changes */
  onChange: PropTypes.func.isRequired,
  /** Defines a value for the `<DatePicker>` */
  value: PropTypes.string,
};

DatePicker.defaultProps = {
  isDisabled: false,
  hasError: false,
  value: null,
};

export default DatePicker;
