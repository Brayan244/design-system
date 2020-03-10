import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import * as colors from '../tokens/colors';

const Badge = ({ text, isAccent, hasIcon }) => {
  const badgeContainer = css`
    background-color: ${isAccent ? `${colors.accent}` : `${colors.discount}`};
    border-radius: ${isAccent ? `15px` : `3px`};
    display: inline-block;
    padding: 5px 10px;

    div {
      vertical-align: middle;
    }
  `;

  return (
    <div css={badgeContainer}>
      {hasIcon && <Icon size="S" type="checkmarkWhite" hasMargin />}

      <Text elementType="span" size="S" weight="semibold" color="white">
        {text}
      </Text>
    </div>
  );
};

Badge.propTypes = {
  /** Cambia al color del componente */
  isAccent: PropTypes.bool,

  /** Badge text */
  text: PropTypes.string.isRequired,

  /** Oculta el icono de checkmar */
  hasIcon: PropTypes.bool,
};

Badge.defaultProps = {
  isAccent: false,
  hasIcon: false,
};

export default Badge;
