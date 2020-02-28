import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const iconTypes = {
  facebook: {
    icon: 'facebook',
    url: 'https://www.facebook.com/ReservamosMx/',
    title: 'Facebook',
  },
  instagram: {
    icon: 'instagram',
    url: 'https://www.instagram.com/reservamos.mx/',
    title: 'Instagram',
  },
  twitter: {
    icon: 'twitter',
    url: 'https://twitter.com/reservamosmx',
    title: 'Twitter',
  },
};

const SocialLink = ({ type }) => {
  const iconStyle = css`
    display: inline-block;
  `;

  return (
    <a
      css={iconStyle}
      href={iconTypes[type].url}
      title={iconTypes[type].title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size="XL" type={iconTypes[type].icon} />
    </a>
  );
};

SocialLink.propTypes = {
  /** Available types: facebook, instagram, twitter */
  type: PropTypes.oneOf(['facebook', 'instagram', 'twitter']).isRequired,
};

export default SocialLink;
