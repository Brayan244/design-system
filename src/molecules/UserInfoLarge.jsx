import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import WalletInfo from './WalletInfo';
import UserPhoto from '../atoms/UserPhoto';
import Text from '../atoms/Text';
import * as mq from '../globals/mediaqueries';

const UserInfoLarge = ({
  text,
  photoUrl,
  name,
  hideOnMobile,
  price,
  isCentered,
}) => {
  const container = css`
    display: flex;
    align-items: center;
    max-width: 460px;
    margin: ${isCentered ? '0 auto' : 'inherit'};

    ${mq.small} {
      display: ${hideOnMobile ? 'none' : 'flex'};
    }
  `;

  const wrapper = css`
    margin-left: 30px;
    flex: 1;

    p:first-child {
      margin-bottom: 10px;
    }
  `;

  return (
    <div css={container}>
      <Global styles={globalStyles} />
      <UserPhoto large photoUrl={photoUrl} />
      <div css={wrapper}>
        <Text weight="semibold" size="XXL">
          {name}
        </Text>
        <WalletInfo price={price} text={text} />
      </div>
    </div>
  );
};

UserInfoLarge.propTypes = {
  /** Profile picture URL */
  photoUrl: PropTypes.string.isRequired,
  /** User name */
  name: PropTypes.string.isRequired,
  /** Hide component on mobile */
  hideOnMobile: PropTypes.bool,
  /** Center the component */
  isCentered: PropTypes.bool,
  /** Price */
  price: PropTypes.number.isRequired,
  /** Text message */
  text: PropTypes.string.isRequired,
};

UserInfoLarge.defaultProps = {
  hideOnMobile: true,
  isCentered: true,
};

export default UserInfoLarge;
