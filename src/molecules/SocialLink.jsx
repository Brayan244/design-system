import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import Icon from '../atoms/Icon';

const iconTypes = {
  facebook: {
    icon: 'facebook',
    url: 'https://www.facebook.com',
    title: 'Facebook',
  },
  instagram: {
    icon: 'instagram',
    url: 'https://www.instagram.com',
    title: 'Instagram',
  },
  twitter: {
    icon: 'twitter',
    url: 'https://www.twitter.com',
    title: 'Twitter',
  },
};

const SocialLink = ({ type }) => {
  const iconStyle = css`
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
        <Icon size="XL" type={iconTypes[type].icon} />
      </a>
    </>
  );
};

SocialLink.propTypes = {
  /** Available types: facebook, instagram, twitter */
  type: PropTypes.oneOf(['facebook', 'instagram', 'twitter']).isRequired,
};

export default SocialLink;
