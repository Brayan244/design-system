import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as mq from '../globals/mediaqueries';
import Logo from '../atoms/Logo';

const Splash = ({ imgSrc, alt }) => {
  const splashContainer = css`
    align-items: center;
    background-color: ${colors.gray100};
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;

    ${mq.small} {
      padding: 0 15px;
    }
  `;

  return (
    <div css={splashContainer}>
      <Logo imgSrc={imgSrc} alt={alt} isLarge grayLogo />
    </div>
  );
};

Splash.propTypes = {
  /** Logo url or base64 img. If this prop is used, `grayLogo` is ignored */
  imgSrc: PropTypes.string,
  /** Alt text for image */
  alt: PropTypes.string.isRequired,
};

Splash.defaultProps = {
  imgSrc: null,
};

export default Splash;
