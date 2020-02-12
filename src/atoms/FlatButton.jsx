import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';

const FlatButton = ({ text, onClick, isDisabled }) => {
  const container = css`
    color: ${isDisabled ? colors.gray400 : colors.accent};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${typography.semibold};
    font-size: ${typography.sizeM};
    text-decoration: underline;
    cursor: ${isDisabled ? 'default' : 'pointer'};

    &:hover {
      color: ${isDisabled ? colors.gray400 : colors.accentStrong};
    }
  `;

  return (
    <button
      type="button"
      css={container}
      onClick={onClick}
      disabled={isDisabled}
    >
      <Global styles={globalStyles} />
      {text}
    </button>
  );
};

FlatButton.propTypes = {
  /** Texto del botón */
  text: PropTypes.string.isRequired,
  /** Callback onClick */
  onClick: PropTypes.func.isRequired,
  /** Indicates the `<button>` is disabled */
  isDisabled: PropTypes.bool,
};

FlatButton.defaultProps = {
  isDisabled: false,
};

export default FlatButton;
