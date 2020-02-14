import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as mq from '../globals/mediaqueries';

const UserPhoto = ({ large, photoUrl }) => {
  const photoStyle = css`
    border-radius: 50%;
    height: ${large ? '120px' : '70px'};
    width: ${large ? '120px' : '70px'};
    min-width: ${large ? '120px' : '70px'};
    background-image: url(${photoUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

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

  return <div css={photoStyle} />;
};

UserPhoto.propTypes = {
  /** Muestra la imagen en 120px x 120px */
  large: PropTypes.bool,
  /** URL de la imagen */
  photoUrl: PropTypes.string.isRequired,
};

UserPhoto.defaultProps = {
  large: false,
};

export default UserPhoto;
