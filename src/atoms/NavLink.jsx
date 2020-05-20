import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';

const NavLink = ({ active, children, small }) => {
  const container = css`
    position: relative;

    a,
    button {
      align-items: center;
      border-bottom: 1px solid ${colors.gray200};
      border-right: ${active ? `5px solid ${colors.accent}` : 0};
      color: ${colors.gray600};
      cursor: ${active ? 'default' : 'pointer'};
      display: flex;
      font-size: ${small ? `${typography.S}` : `${typography.M}`};
      font-weight: ${active || small
        ? `${typography.semibold}`
        : `${typography.regular}`};
      font-family: 'Open Sans', sans-serif;
      height: 50px;
      padding: 0 15px;
      width: 100%;
      transition: background-color 200ms ease-out;

      &:hover {
        background-color: ${colors.gray200};
      }

      &:focus {
        outline: dashed 2px ${colors.gray200};
      }
    }

    &:first-of-type a,
    &:first-of-type button {
      border-top: 1px solid ${colors.gray200};
    }
  `;

  return <div css={container}>{children}</div>;
};

NavLink.propTypes = {
  /** Whether the user is in the current link's page path */
  active: PropTypes.bool,
  /** Must be an `<a>` or `<button>` tag to work */
  children: PropTypes.node.isRequired,
  /** Whether the user is in the current link's page path */
  small: PropTypes.bool,
};

NavLink.defaultProps = {
  active: false,
  small: false,
};

export default NavLink;
