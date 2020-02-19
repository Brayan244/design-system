import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';

const colorTypes = {
  accent: {
    color: colors.accent,
    hover: colors.accentStrong,
  },
  disabled: {
    color: colors.gray400,
    hover: colors.gray400,
  },
  info: {
    color: colors.info,
    hover: colors.infoStrong,
  },
  error: {
    color: colors.error,
    hover: colors.errorStrong,
  },
};

const Link = ({ large, text, href, type }) => {
  const linkStyle = css`
    font-size: ${large ? `${typography.sizeL}` : `${typography.sizeS}`};
    font-weight: ${typography.semibold};
    text-decoration: underline;
    color: ${colorTypes[type].color};
    font-family: 'Open Sans', sans-serif;

    &:hover {
      color: ${colorTypes[type].hover};
    }
  `;

  return (
    <a css={linkStyle} href={href}>
      {text}
    </a>
  );
};

Link.propTypes = {
  /** Aumenta el tamaño de la tipografía a 16px */
  large: PropTypes.bool,
  /** Texto que tendrá el link */
  text: PropTypes.string.isRequired,
  /** URL del link */
  href: PropTypes.string.isRequired,
  /** Tipo de color del link */
  type: PropTypes.oneOf(['accent', 'disabled', 'info', 'error']).isRequired,
};

Link.defaultProps = {
  large: false,
};

export default Link;
