import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import iconFacebook from '../../images/icons/social-facebook.svg';
import iconInstagram from '../../images/icons/social-instagram.svg';
import iconTwitter from '../../images/icons/social-twitter.svg';

const iconTypes = {
  facebook: {
    icon: iconFacebook,
    url: 'https://www.facebook.com',
    title: 'Facebook',
  },
  instagram: {
    icon: iconInstagram,
    url: 'https://www.instagram.com',
    title: 'Instagram',
  },
  twitter: {
    icon: iconTwitter,
    url: 'https://www.twitter.com',
    title: 'Twitter',
  },
};

const SocialIcon = ({ type }) => {
  const iconStyle = css`
    display: inline-block;
  `;
  const icons = css`
    height: 45px;
    width: 45px;
    background-image: url(${iconTypes[type].icon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <a
        css={iconStyle}
        href={iconTypes[type].url}
        title={iconTypes[type].title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i css={icons} />
      </a>
    </>
  );
};

SocialIcon.propTypes = {
  /** Available types: facebook, instagram, twitter */
  type: PropTypes.oneOf(['facebook', 'instagram', 'twitter']).isRequired,
};

export default SocialIcon;
