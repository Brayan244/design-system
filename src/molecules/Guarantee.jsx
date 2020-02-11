import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import globalStyles from '../globals/reset';
import * as mq from '../globals/mediaqueries';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

const Guarantee = ({ text, mainText }) => {
  const guaranteeStyle = css`
    display: flex;
    align-items: center;

    p b {
      margin-left: 5px;
    }

    ${mq.small} {
      p b {
        display: block;
        margin-left: 0;
      }
    }
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <div css={guaranteeStyle}>
        <Icon size="L" type="guarantee" hasMargin />
        <Text size="S">
          {text}
          <b>{mainText}</b>
        </Text>
      </div>
    </>
  );
};

Guarantee.propTypes = {
  /** Texto descriptivo */
  text: PropTypes.string.isRequired,

  /** Texto principal */
  mainText: PropTypes.string.isRequired,
};

export default Guarantee;
