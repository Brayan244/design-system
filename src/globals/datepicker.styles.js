import { css } from '@emotion/core';
import inputBaseStyles from '../base/input.styles';

export default function datepickerStyles(isDisabled = false, hasError = false) {
  return css`
    .SingleDatePicker {
      font-family: 'Open Sans', sans-serif;
    }

    .SingleDatePickerInput__showClearDate {
      padding: 0;
    }

    .SingleDatePickerInput_clearDate {
      top: 43%;
    }

    .SingleDatePickerInput_clearDate:hover {
      background: none;
    }

    .SingleDatePickerInput__disabled {
      background: none;
    }

    .DateInput_input {
      border: unset;
      font-style: unset;
      line-height: unset;
      margin: unset;
      font-family: 'Open Sans', sans-serif;
      ${inputBaseStyles(isDisabled, hasError)}
    }

    .DateInput__disabled {
      background: none;
    }

    .DateInput_input__disabled {
      background: none;
    }
  `;
}
