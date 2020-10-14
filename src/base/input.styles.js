import { css } from '@emotion/core';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';
import * as icons from '../icons/index';

export default function inputStyles(isDisabled, hasError) {
  const errorColor = hasError ? colors.error : null;

  return css`
    appearance: none;
    background-color: ${colors.gray100};
    background-image: ${hasError ? `url(${icons.errorRed})` : null};
    background-position: 95%;
    background-repeat: no-repeat;
    background-size: 20px;
    border: solid 1px transparent;
    border-bottom-color: ${hasError ? errorColor : colors.gray200};
    border-bottom-style: solid;
    border-bottom-width: ${isDisabled ? 0 : '1px'};
    box-shadow: ${hasError ? `0 1px 0 0 ${colors.error}` : 'inherit'};
    color: ${errorColor || colors.gray600};
    font-size: ${typography.M};
    height: 50px;
    padding: 0 15px;
    transition: border 0.3s, background-color 0.3s, -webkit-box-shadow 0.3s;
    width: 100%;

    &:focus {
      border: 1px solid ${errorColor || colors.accent};
      box-shadow: ${hasError
        ? colors.error
        : '0px 0px 4px 2px rgba(206, 52, 139, 0.36)'};
      outline: none;

      & + label {
        color: ${errorColor || colors.accent};
      }
    }

    &:disabled {
      background: none;
      color: ${colors.gray600};
      opacity: 1;
      -webkit-text-fill-color: ${colors.gray600};
    }
  `;
}
