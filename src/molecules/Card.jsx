import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import * as colors from '../tokens/colors';

const Card = ({ children, isActive }) => {
  const cardContainer = css`
    width: 100%;
    background-color: #ffffff;
    border-color: ${isActive ? 'rgba(206, 52, 139, 0.5)' : colors.gray200};
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    box-shadow: ${isActive ? `0 0 10px rgba(206,52,139,.4)` : `none`};
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  `;

  return <div css={cardContainer}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
};

Card.defaultProps = {
  children: null,
  isActive: false,
};

export default Card;
