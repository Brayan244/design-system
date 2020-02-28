import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

const WalletInfo = ({ text, balance }) => {
  const container = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const wrapper = css`
    display: flex;
    align-items: center;
  `;

  return (
    <div css={container}>
      <div css={wrapper}>
        <Icon size="M" type="wallet" hasMargin />
        <Text weight="semibold" size="S">
          {text}
        </Text>
      </div>
      <Text weight="semibold" size="L">
        {`$${balance}`}
      </Text>
    </div>
  );
};

WalletInfo.propTypes = {
  /** Price */
  balance: PropTypes.number.isRequired,
  /** Text message */
  text: PropTypes.string.isRequired,
};

export default WalletInfo;
