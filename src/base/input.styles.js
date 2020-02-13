import { css } from '@emotion/core';
import * as colors from '../tokens/colors';

export default function inputStyles(isDisabled, hasError) {
  const errorColor = hasError ? colors.error : null;

  return css`
    border-bottom-color: ${hasError ? errorColor : colors.gray200};
    border-bottom-style: solid;
    border-bottom-width: ${isDisabled ? 0 : '1px'};
    box-shadow: ${hasError ? `0 1px 0 0 ${colors.error}` : 'inherit'};
    color: ${errorColor || colors.gray600};
    font-size: 16px;
    height: 50px;
    padding: 0 15px;
    transition: border 0.3s, -webkit-box-shadow 0.3s;
    width: 100%;

    &:focus {
      border-color: ${errorColor || colors.accent};
      box-shadow: 0 1px 0 0 ${hasError ? colors.error : colors.accent};

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
}
