import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';
import * as mq from '../globals/mediaqueries';

const paddingSizes = {
  L: '10px 25px',
  M: '5px 15px',
  S: '0 5px',
};

const LinkButton = ({
  text,
  fontSize,
  weight,
  href,
  newTab,
  padding,
  fullWidthOnSmall,
}) => {
  const container = css`
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    font-weight: ${typography[weight]};
    font-size: ${typography[fontSize]};
    cursor: pointer;
    background-color: ${colors.accent};
    padding: ${paddingSizes[padding]};
    border-radius: ${fullWidthOnSmall ? '0' : '4px'};
    display: inline-block;
    text-decoration: none;

    &:hover {
      background-color: ${colors.accentStrong};
    }

    ${mq.small} {
      width: ${fullWidthOnSmall ? '100%' : null};
      text-align: center;
      border-radius: 0;
    }
  `;

  return (
    <a
      css={container}
      href={href}
      target={newTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

LinkButton.propTypes = {
  /** Select padding size: `S=11px`, `S=0 5px`, `M=5px 15px`, `L=10px 25px` */
  padding: PropTypes.oneOf(['S', 'M', 'L']),
  /** Texto del botón */
  text: PropTypes.string.isRequired,
  /** Font size */
  fontSize: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Font weight */
  weight: PropTypes.oneOf(['bold', 'semibold', 'regular']),
  /** Texto del link */
  href: PropTypes.string.isRequired,
  /** Opens the linked document in the same windown or new tab */
  newTab: PropTypes.bool,
  /** Muestra el botón con 100% de ancho en pantallas pequeñas */
  fullWidthOnSmall: PropTypes.bool,
};

LinkButton.defaultProps = {
  fontSize: 'M',
  weight: 'semibold',
  newTab: false,
  padding: 'L',
  fullWidthOnSmall: false,
};

export default LinkButton;
