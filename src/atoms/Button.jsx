import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';

const Button = ({ noFill, text }) => {
  const ButtonStyle = css`
    background-color: ${noFill ? '#ffffff' : `${colors.accent}`};
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: ${noFill ? `${colors.accent}` : '#ffffff'};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${typography.semibold};
    font-size: ${typography.sizeM};
    height: 35px;
    min-width: 100px;
    padding: 9px 24px;

    &:hover {
      background-color: ${noFill
        ? `${colors.gray200}`
        : `${colors.accentStrong}`};
    }
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <button type="button" css={ButtonStyle}>
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  /** Muestra el botón sin el color primario */
  noFill: PropTypes.bool,
  /** Texto del botón */
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  noFill: false,
};

export default Button;
