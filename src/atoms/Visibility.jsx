import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as mq from '../globals/mediaqueries';

const Visibility = ({ type, children }) => {
  const selectVariant = variantType => {
    switch (variantType) {
      case 'showForMobileOnly':
        return css`
          display: none;

          ${mq.small} {
            display: block;
          }
        `;
      case 'hideForMobileOnly':
        return css`
          ${mq.small} {
            display: none;
          }
        `;
      case 'hideForLargeOnly':
        return css`
          ${mq.large} {
            display: none;
          }
        `;
      case 'hideForMedium':
        return css`
          ${mq.medium} {
            display: none;
          }
        `;
      default:
        return '';
    }
  };

  return <div css={selectVariant(type)}>{children}</div>;
};

Visibility.propTypes = {
  /** Visibility type */
  type: PropTypes.oneOf([
    'showForMobileOnly',
    'hideForMobileOnly',
    'hideForLargeOnly',
    'hideForMedium',
  ]).isRequired,
  /** Any html element */
  children: PropTypes.node.isRequired,
};

export default Visibility;
