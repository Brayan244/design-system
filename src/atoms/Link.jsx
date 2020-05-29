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
  success: {
    color: colors.success,
    hover: colors.successStrong,
  },
};

const Link = ({ text, href, type, newTab, size, weight }) => {
  const linkStyle = css`
    color: ${colorTypes[type].color};
    text-decoration: underline;
    font-family: 'Open Sans', sans-serif;
    font-size: ${typography[size]};
    font-weight: ${typography[weight]};
    transition: color 0.25s ease-out;

    &:hover {
      color: ${colorTypes[type].hover};
    }

    &:focus {
      outline: dashed 2px ${colorTypes[type].color}30;
    }
  `;

  return (
    <a
      css={linkStyle}
      href={href}
      target={newTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

Link.propTypes = {
  /** Texto que tendrá el link */
  text: PropTypes.string.isRequired,
  /** URL del link */
  href: PropTypes.string.isRequired,
  /** Tipo de color del link */
  type: PropTypes.oneOf(['accent', 'disabled', 'info', 'error', 'success'])
    .isRequired,
  /** Opens the linked document in the same windown or new tab */
  newTab: PropTypes.bool,
  /** Font size */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Font weight */
  weight: PropTypes.oneOf(['bold', 'semibold', 'regular']),
};

Link.defaultProps = {
  newTab: false,
  size: 'S',
  weight: 'semibold',
};

export default Link;
