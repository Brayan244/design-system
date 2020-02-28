import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import UserPhoto from '../atoms/UserPhoto';
import Text from '../atoms/Text';

const UserInfo = ({ photoUrl, name }) => {
  const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 10px;
    }
  `;

  return (
    <div css={container}>
      <UserPhoto photoUrl={photoUrl} />

      <Text weight="semibold" size="XL">
        {name}
      </Text>
    </div>
  );
};

UserInfo.propTypes = {
  /** Profile picture URL */
  photoUrl: PropTypes.string.isRequired,
  /** User name */
  name: PropTypes.string.isRequired,
};

export default UserInfo;
