import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import slideInDown from '../base/keyframes.styles';
import * as colors from '../tokens/colors';
import * as mq from '../globals/mediaqueries';
import * as zIndexes from '../tokens/zIndexes';

const variantTypes = {
  success: {
    icon: 'checkmarkWhite',
    color: colors.success,
  },
  error: {
    icon: 'error',
    color: colors.error,
  },
  warning: {
    icon: 'warning',
    color: colors.warning,
  },
  info: {
    icon: 'info',
    color: colors.info,
  },
};

const AlertMessage = ({ text, type, title, zIndex }) => {
  const alertContainer = css`
    position: fixed;
    top: 30px;
    width: 100%;
    z-index: ${zIndex};
    animation: ${slideInDown} 0.5s;
  `;

  const alertContent = css`
    display: flex;
    align-items: center;
    background-color: ${variantTypes[type].color};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    width: 50vw;
    height: 60px;
    padding: 10px;
    margin: 0 auto;
    border-radius: 8px;

    p {
      color: #ffffff;
    }

    ${mq.small} {
      width: 90vw;
    }
  `;

  const alertIcon = css`
    display: inline-block;
    margin: 0 15px 0 10px;
  `;

  return (
    <div css={alertContainer}>
      <div css={alertContent}>
        <div css={alertIcon}>
          <Icon size="M" type={variantTypes[type].icon} />
        </div>
        <div>
          {Boolean(title) && (
            <Text size="M" weight="semibold">
              {title}
            </Text>
          )}
          <Text size="M" weight="semibold">
            {text}
          </Text>
        </div>
      </div>
    </div>
  );
};

AlertMessage.propTypes = {
  /** Título de la alerta */
  title: PropTypes.string,

  /** Texto de la alerta */
  text: PropTypes.string.isRequired,

  /** Available types: error, success, warning, info */
  type: PropTypes.oneOf(['error', 'success', 'warning', 'info']),

  /** `z-index` value - Default `901` */
  zIndex: PropTypes.number,
};

AlertMessage.defaultProps = {
  title: '',
  type: 'info',
  zIndex: zIndexes.secondLayer,
};

export default AlertMessage;
