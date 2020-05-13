import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Overlay = ({ children, onClick, zIndex, overlayOpacity }) => {
  const overlay = css`
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, ${overlayOpacity});
    overflow-y: scroll;
    z-index: ${zIndex};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div css={overlay} onClick={onClick} role="presentation">
      {children}
    </div>
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  /** Value for `z-index` */
  zIndex: PropTypes.number,
  /** Value for `opacity` on Overlay  */
  overlayOpacity: PropTypes.number,
  /** Function for close overlay on Modals */
  onClick: PropTypes.func,
};

Overlay.defaultProps = {
  onClick: () => {},
  overlayOpacity: 0.7,
  zIndex: 1,
};

export default Overlay;
