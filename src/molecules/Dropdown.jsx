import React, { useState, useRef } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import useOutsideClick from '../hooks/useOutsideClick';

const Dropdown = ({ trigger, children, hasArrow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useOutsideClick(dropdownRef.current, () => setIsOpen(false));

  const dropdown = css`
    display: flex;
    justify-content: flex-end;
    position: relative;
  `;

  const content = css`
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
    display: none;
    max-width: 306px;
    min-width: 300px;
    visibility: hidden;
    z-index: 100;
  `;

  const expanded = css`
    display: block;
    position: absolute;
    top: ${hasArrow ? '40px' : '20px'};
    visibility: visible;
  `;

  const arrow = css`
    position: absolute;
    top: -12px;
    right: 5px;
  `;

  const containerStyles = [content];

  if (isOpen) {
    containerStyles.push(expanded);
  }

  return (
    <div ref={dropdownRef} css={dropdown}>
      <div onClick={() => setIsOpen(!isOpen)} role="presentation">
        {trigger}
      </div>

      <div css={containerStyles}>
        {Boolean(hasArrow) && (
          <div css={arrow}>
            <Icon type="dropdown" size="S" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  /** acciona el dropdown  */
  trigger: PropTypes.node.isRequired,
  /** contenido del dropdown */
  children: PropTypes.node.isRequired,
  /** contenido del dropdown */
  hasArrow: PropTypes.bool,
};

Dropdown.defaultProps = {
  hasArrow: true,
};

export default Dropdown;
