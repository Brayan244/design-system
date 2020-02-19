import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as mq from '../globals/mediaqueries';

const sizes = {
  S: 25,
  M: 70,
  L: 120,
};

const UserPhoto = ({ size, photoUrl }) => {
  const mediaQueries = css`
    ${mq.small} {
      height: 80px;
      width: 80px;
      min-width: 80px;
    }

    ${mq.xsmall} {
      height: 50px;
      width: 50px;
      min-width: 50px;
    }
  `;

  const photoStyle = css`
    border-radius: 50%;
    height: ${sizes[size]}px;
    width: ${sizes[size]}px;
    min-width: ${sizes[size]}px;
    background-image: url(${photoUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    ${size === 'L' && mediaQueries}
  `;

  return <div css={photoStyle} />;
};

UserPhoto.propTypes = {
  /** Available sizes: S, M, L */
  size: PropTypes.oneOf(['S', 'M', 'L']),
  /** URL de la imagen */
  photoUrl: PropTypes.string.isRequired,
};

UserPhoto.defaultProps = {
  size: 'M',
};

export default UserPhoto;
