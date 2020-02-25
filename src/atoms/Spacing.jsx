import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

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
}) => {
  const marginLeft = `${spacingSizes[sizeHorizontal || sizeVertical]}px;`;
  const marginTop = `${spacingSizes[sizeVertical || sizeHorizontal]}px;`;

  const wrapper = css`
    display: flex;
    flex-direction: ${direction === 'vertical' ? 'column' : 'row'};
    align-items: ${alignItems};
    justify-content: ${justifyContent};

    > * + * {
      margin-top: ${direction === 'vertical' || direction === 'both'
        ? marginTop
        : 0};
      margin-left: ${direction === 'horizontal' || direction === 'both'
        ? marginLeft
        : 0};
    }
  `;

  return <div css={wrapper}>{children}</div>;
};

Spacing.propTypes = {
  /** Select vertical spacing size: `XS=5px`, `S=10px`, `M=20px`, `L=30px`, `XL=40px`  */
  sizeVertical: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL']),
  /** Select horizontal spacing size: `XS=5px`, `S=10px`, `M=20px`, `L=30px`, `XL=40px`  */
  sizeHorizontal: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL']),
  /** Select direction for spacing */
  direction: PropTypes.oneOf(['both', 'vertical', 'horizontal']).isRequired,
  /** Specifies the alignment for items inside the flexible container */
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center']),
  /** Aligns the flexible container's items when the items do not use all available space on the main-axis */
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  /** Displays the element or elements you include between the opening and closing tags */
  children: PropTypes.node.isRequired,
};

Spacing.defaultProps = {
  sizeHorizontal: 'M',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  sizeVertical: null,
};

export default Spacing;
