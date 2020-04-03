import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import * as mq from '../globals/mediaqueries';

const spacingSizes = {
  XS: 5,
  S: 10,
  M: 20,
  L: 30,
  XL: 40,
};

const Spacing = ({
  sizeVertical,
  sizeHorizontal,
  children,
  direction,
  alignItems,
  justifyContent,
  flex,
  isResponsive,
  responsiveScreen,
}) => {
  const marginLeft = `${spacingSizes[sizeHorizontal || sizeVertical]}px;`;
  const marginTop = `${spacingSizes[sizeVertical || sizeHorizontal]}px;`;

  const childrenStyles = css`
    > * {
      flex: ${flex};

      & + * {
        margin-top: ${direction === 'vertical' || direction === 'both'
          ? marginTop
          : 0};
        margin-left: ${direction === 'horizontal' || direction === 'both'
          ? marginLeft
          : 0};
      }
    }
  `;

  const mediaQueries = css`
    ${mq[responsiveScreen]} {
      flex-direction: column;

      > * + * {
        margin-left: 0;
        margin-top: ${direction === 'horizontal' ? marginLeft : 0};
      }
    }
  `;

  const wrapper = css`
    display: flex;
    flex-direction: ${direction === 'vertical' ? 'column' : 'row'};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    ${childrenStyles};
    ${isResponsive && mediaQueries}
  `;

  return <div css={wrapper}>{children}</div>;
};

Spacing.propTypes = {
  /** Displays the element or elements you include between the opening and closing tags */
  children: PropTypes.node.isRequired,
  /** Select direction for spacing */
  direction: PropTypes.oneOf(['both', 'vertical', 'horizontal']).isRequired,
  /** Select horizontal spacing size: `XS=5px`, `S=10px`, `M=20px`, `L=30px`, `XL=40px`  */
  sizeHorizontal: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL']),
  /** Select vertical spacing size: `XS=5px`, `S=10px`, `M=20px`, `L=30px`, `XL=40px`  */
  sizeVertical: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL']),
  /** Let all the flexible items be the same length */
  flex: PropTypes.string,
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
};

Spacing.defaultProps = {
  sizeHorizontal: 'M',
  sizeVertical: null,
  flex: '0 1 auto',
  alignItems: 'initial',
  justifyContent: 'initial',
  isResponsive: false,
  responsiveScreen: 'small',
};

export default Spacing;
