import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import * as mq from '../globals/mediaqueries';

const IconText = ({
  iconSize,
  fontSize,
  label,
  iconType,
  isVertical,
  mobileInline,
  fontWeight,
  maxWidth,
}) => {
  const container = css`
    display: flex;
    flex-direction: ${isVertical ? 'column' : null};
    align-items: center;
    max-width: ${maxWidth};
    text-align: ${isVertical ? 'center' : null};

    div:first-child {
      margin-right: ${isVertical ? 'null' : '10px'};
      margin-bottom: ${isVertical ? '10px' : 'null'};
    }

    ${mq.small} {
      flex-direction: ${mobileInline ? 'row' : null};

      div:first-child {
        margin-right: ${mobileInline ? '10px' : 'null'};
        margin-bottom: ${mobileInline ? '0' : 'null'};
      }
    }
  `;

  return (
    <div css={container}>
      <Icon size={iconSize} type={iconType} />
      <Text size={fontSize} weight={fontWeight}>
        {label}
      </Text>
    </div>
  );
};

IconText.propTypes = {
  /** Select icon size `S=15px`, `M=25px`, `L=35px` */
  iconSize: PropTypes.oneOf(['S', 'M', 'L']),
  /** Indicates the icon's name to display */
  iconType: PropTypes.string.isRequired,
  /** Indicates the name of the icon label */
  label: PropTypes.string.isRequired,
  /** Select font size `XS=11px`, `S=14px`, `M=16px`, `L=17px`, `XL=18px`, `XLL=20px` */
  fontSize: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL']),
  /** Indicates if the components are arranged in a column */
  isVertical: PropTypes.bool,
  /** Indicates if the components are arranged in a row on mobile screens */
  mobileInline: PropTypes.bool,
  /** Select font weight `bold`, `semibold`, `regular` */
  fontWeight: PropTypes.oneOf(['bold', 'semibold', 'regular']),
  /** Let all the flexible items be the same length adding `flex-grow: 1` or null  */
  maxWidth: PropTypes.string,
};

IconText.defaultProps = {
  iconSize: 'M',
  fontSize: 'M',
  isVertical: false,
  mobileInline: false,
  fontWeight: 'regular',
  maxWidth: '100%',
};

export default IconText;
