import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';

function selectLink(type) {
  switch (type) {
    case 'accent':
      return colors.accent;
    case 'disabled':
      return colors.gray400;
    case 'info':
      return colors.info;
    case 'error':
      return colors.error;
    default:
      return '';
  }
}

const Link = ({ large, text, url, type }) => {
  const linkStyle = css`
    font-size: ${large ? `${typography.sizeL}` : `${typography.sizeS}`};
    font-weight: ${typography.semibold};
    text-decoration: underline;
    color: ${selectLink(type)};
    font-family: 'Open Sans', sans-serif;
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <a css={linkStyle} href={url}>
        {text}
      </a>
    </>
  );
};

Link.propTypes = {
  /** Aumenta el tamaño de la tipografía a 16px */
  large: PropTypes.bool,
  /** Texto que tendrá el link */
  text: PropTypes.string.isRequired,
  /** URL del link */
  url: PropTypes.string.isRequired,
  /** Tipo de color del link */
  type: PropTypes.oneOf(['accent', 'disabled', 'info', 'error']).isRequired,
};

Link.defaultProps = {
  large: false,
};

export default Link;
