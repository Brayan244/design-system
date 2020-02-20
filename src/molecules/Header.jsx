import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import Logo from '../atoms/Logo';
import Icon from '../atoms/Icon';
import * as mq from '../globals/mediaqueries';
import Text from '../atoms/Text';
import UserPhoto from '../atoms/UserPhoto';

const Header = ({ alt, logoSrc, title, url, photoUrl }) => {
  const headerStyle = css`
    align-items: center;
    background-color: ${colors.primary};
    display: flex;
    height: 50px;
    padding: 0 15px;
    width: 100%;
  `;

  const headerContainer = css`
    ${mq.small} {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
    }

    p {
      display: none;

      ${mq.small} {
        color: #ffffff;
        display: block;
      }
    }
  `;

  const arrowBack = css`
    display: none;

    ${mq.small} {
      display: block;
      position: absolute;
      left: 15px;
    }
  `;

  const photoProfile = css`
    display: none;

    ${mq.small} {
      display: block;
      position: absolute;
      right: 15px;
    }
  `;

  return (
    <div css={headerStyle}>
      <Logo imgSrc={logoSrc} alt={alt} hideOnMobile />
      {Boolean(url) && (
        <a href={url} css={arrowBack}>
          <Icon type="arrowBack" size="S" />
        </a>
      )}
      <div css={headerContainer}>
        {Boolean(!title) && <Logo imgSrc={logoSrc} alt={alt} hideOnDesktop />}
        <Text size="M">{title}</Text>
      </div>
      <div css={photoProfile}>
        <UserPhoto size="S" photoUrl={photoUrl} />
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
  title: PropTypes.string,

  /** Back link URL */
  url: PropTypes.string,

  /** Profile picture URL */
  photoUrl: PropTypes.string.isRequired,
};

Header.defaultProps = {
  logoSrc: null,
  url: null,
  title: '',
};

export default Header;
