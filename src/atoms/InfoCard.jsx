import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as typography from '../tokens/typography';
import Text from './Text';
import Icon from './Icon';

const InfoCard = ({ children, icon, title }) => {
  const infoCardContainer = css`
    align-items: center;
    display: flex;
    padding: 10px;
  `;

  const card = css`
    font-family: 'Open Sans', sans-serif;
    font-weight: ${typography.regular};
    font-size: ${typography.S};
    white-space: normal;
    margin-top: 10px;
  `;

  const content = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 5px 15px;
  `;

  return (
    <div css={infoCardContainer}>
      <Icon type={icon} size="XL" />
      <div css={content}>
        <Text color="grayStrong" weight="semibold" size="S">
          {title}
        </Text>
        <div css={card}>{children}</div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
};

InfoCard.defaultProps = {
  children: null,
  title: 'Title',
};

export default InfoCard;
