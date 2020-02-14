import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as mq from '../globals/mediaqueries';
import * as colors from '../tokens/colors';
import * as typography from '../tokens/typography';
import Icon from './Icon';

const SidebarLink = ({ text, active, linkUrl }) => {
  const ButtonStyle = css`
    position: relative;
    align-items: center;
    border-bottom: 1px solid ${colors.gray200};
    border-right: ${active ? `5px solid ${colors.accent}` : 0};
    color: ${colors.gray600};
    display: flex;
    font-size: ${typography.sizeM};
    font-weight: ${active ? `${typography.semibold}` : `${typography.regular}`};
    font-family: 'Open Sans', sans-serif;
    height: 50px;
    padding: 0 15px;
    width: 100%;

    ${mq.small} {
      border-right: 0;
      font-weight: ${typography.regular};
    }
  `;

  const rightPrimary = css`
    display: none;

    ${mq.small} {
      position: absolute;
      right: 14px;
      display: block;
    }
  `;

  return (
    <a href={linkUrl} css={ButtonStyle}>
      {text}
      <div href="#" css={rightPrimary}>
        <Icon type="rightPrimary" size="S" />
      </div>
    </a>
  );
};

SidebarLink.propTypes = {
  /** Texto del botón */
  text: PropTypes.string.isRequired,
  /** Indica que el componente se visualizará "activo" */
  active: PropTypes.bool,
  /** Indica el URL del link */
  linkUrl: PropTypes.string.isRequired,
};

SidebarLink.defaultProps = {
  active: false,
};

export default SidebarLink;
