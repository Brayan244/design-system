import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import * as colors from '../tokens/colors';
import * as mq from '../globals/mediaqueries';

const Card = ({
  children,
  isActive,
  hasMargin,
  hasBorder,
  hasShadow,
  hasPadding,
  paddingSmall,
}) => {
  const activeShadow = css`
    box-shadow: 0 0 10px rgba(206, 52, 139, 0.4);
  `;

  const cardContainer = css`
    width: 100%;
    background-color: #ffffff;
    border-color: ${isActive ? 'rgba(206, 52, 139, 0.5)' : colors.gray200};
    border-style: solid;
    border-width: ${hasBorder ? '1px' : 0};
    border-radius: 4px;
    box-shadow: ${hasShadow ? `0 0 10px rgba(0, 0, 0, 0.3)` : null};
    padding: ${hasPadding ? `30px` : null};
    margin-bottom: ${hasMargin ? '20px' : null};
    ${isActive && activeShadow}

    &:last-child {
      margin-bottom: ${hasMargin ? 0 : null};
    }

    ${mq.small} {
      box-shadow: ${hasShadow ? 'unset' : null};
      padding: ${hasPadding ? paddingSmall : null};
    }
  `;

  return <div css={cardContainer}>{children}</div>;
};

Card.propTypes = {
  /** Content */
  children: PropTypes.node,
  /** Adds box-shadow with accent tone */
  isActive: PropTypes.bool,
  /** Adds box shadow */
  hasShadow: PropTypes.bool,
  /** Adds 30px on padding */
  hasPadding: PropTypes.bool,
  /** Removes margin-bottom */
  hasMargin: PropTypes.bool,
  /** Sets border width to 0 */
  hasBorder: PropTypes.bool,
  /** Modifies padding for small screens */
  paddingSmall: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  isActive: false,
  hasShadow: false,
  hasPadding: false,
  hasMargin: true,
  hasBorder: true,
  paddingSmall: '15px 5px',
};

export default Card;
