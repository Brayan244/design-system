import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import * as mq from '../globals/mediaqueries';

const spacingSizes = {
  XS: '5px',
  S: '10px',
  M: '20px',
  L: '30px',
  XL: '40px',
};

const Spacing = ({
  size,
  children,
  vertical,
  alignItems,
  justifyContent,
  flexGrow,
  isResponsive,
  responsiveScreen,
  responsiveColumnReverse,
  textAlign,
  responsiveSize,
}) => {
  const verticalSpacing = vertical ? spacingSizes[size] : null;
  const horizontalSpacing = !vertical ? spacingSizes[size] : null;
  const horizontalResponsive = !vertical
    ? spacingSizes[responsiveSize] || spacingSizes[size]
    : null;
  const verticalResponsive = vertical ? spacingSizes[responsiveSize] : null;

  let responsiveDirection = 'column';
  let responsiveMargin = 'margin-top';
  if (responsiveColumnReverse) {
    responsiveMargin = 'margin-bottom';
    responsiveDirection = 'column-reverse';
  }

  const childrenStyles = css`
    > * {
      flex: ${flexGrow ? '1' : null};

      & + * {
        margin-left: ${horizontalSpacing};
        margin-top: ${verticalSpacing};
      }
    }
  `;

  const childrenResponsiveStyles = css`
    > * + * {
      ${mq[responsiveScreen]} {
        margin-left: ${horizontalResponsive};
        margin-top: ${verticalResponsive};
      }
    }
  `;

  const mediaQueries = css`
    ${mq[responsiveScreen]} {
      flex-direction: ${responsiveDirection};

      > * + * {
        margin-left: 0;
        ${responsiveMargin}: ${horizontalResponsive};
      }
    }
  `;

  const wrapper = css`
    display: flex;
    flex-direction: ${vertical ? 'column' : 'row'};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    text-align: ${textAlign};
    ${childrenStyles};
    ${Boolean(responsiveSize) && childrenResponsiveStyles}
    ${isResponsive && mediaQueries}
  `;

  return <div css={wrapper}>{children}</div>;
};

Spacing.propTypes = {
  /** Displays the element or elements you include between the opening and closing tags */
  children: PropTypes.node.isRequired,
  /** Select direction for spacing */
  vertical: PropTypes.bool,
  /** Select spacing size: `XS=5px`, `S=10px`, `M=20px`, `L=30px`, `XL=40px`  */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL']),
  /** Select different spacing size for responsive: `XS=5px`, `S=10px`, `M=20px`, `L=30px`, `XL=40px`  */
  responsiveSize: PropTypes.oneOf(['', 'XS', 'S', 'M', 'L', 'XL']),
  /** Let all the flexible items be the same length adding `flex-grow: 1` */
  flexGrow: PropTypes.bool,
  /** Specifies the alignment for items inside the flexible container */
  alignItems: PropTypes.oneOf([
    'initial',
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
  ]),
  /** Aligns the flexible container's items when the items do not use all available space on the main-axis */
  justifyContent: PropTypes.oneOf([
    'initial',
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  /** Changes Horizontal alignment to Vertical on `small` or `medium` screens */
  isResponsive: PropTypes.bool,
  /** Select screen size for responsive: `small` or `medium`  */
  responsiveScreen: PropTypes.oneOf(['medium', 'small']),
  /** Sets `column-reverse` on flex-direction for responsive  */
  responsiveColumnReverse: PropTypes.bool,
  /** Set text alignmetn for spacing items */
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

Spacing.defaultProps = {
  vertical: false,
  size: 'M',
  responsiveSize: '',
  flexGrow: false,
  alignItems: 'initial',
  justifyContent: 'initial',
  isResponsive: false,
  responsiveScreen: 'small',
  responsiveColumnReverse: false,
  textAlign: 'left',
};

export default Spacing;
