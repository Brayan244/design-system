import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import Logo from '../atoms/Logo';
import Icon from '../atoms/Icon';
import * as mq from '../globals/mediaqueries';
import Text from '../atoms/Text';

const Header = ({ alt, logoSrc, text, url }) => {
  const headerStyle = css`
    align-items: center;
    background-color: ${colors.primary};
    display: flex;
    height: 50px;
    padding: 15px;
    width: 100%;
  `;

  const headerContainer = css`
    margin: 0 auto;
    max-width: 1220px;
    width: 100%;

    ${mq.small} {
      padding: 0 15px;
    }

    p {
      display: none;

      ${mq.small} {
        color: #ffffff;
        display: block;
        text-align: center;
      }
    }
  `;

  const arrowBack = css`
    display: none;

    ${mq.small} {
      display: block;
    }
  `;

  return (
    <div css={headerStyle}>
      {Boolean(url) && (
        <a href={url} css={arrowBack}>
          <Icon type="arrowBack" size="S" />
        </a>
      )}
      <div css={headerContainer}>
        <Logo imgSrc={logoSrc} alt={alt} hideOnMobile />
        <Text size="M">{text}</Text>
      </div>
    </div>
  );
};

Header.propTypes = {
  /** Logo url or base64 img to show in the header */
  logoSrc: PropTypes.string,
  /** Alt text for image */
  alt: PropTypes.string.isRequired,
  /** Título del header */
  text: PropTypes.string.isRequired,
  /** Back link URL */
  url: PropTypes.string,
};

Header.defaultProps = {
  logoSrc: null,
  url: null,
};

export default Header;
