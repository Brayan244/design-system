import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as colors from '../tokens/colors';
import * as mq from '../globals/mediaqueries';
import * as zIndexes from '../tokens/zIndexes';
import Overlay from '../atoms/Overlay';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import Button from '../organisms/Button';

const DialogMessage = ({
  title,
  message,
  primaryButton,
  secondaryButton,
  onClickPrimary,
  onClickSecondary,
  overlayOpacity,
  zIndex,
  iconType,
  iconSize,
}) => {
  const container = css`
    background-color: #ffffff;
    border-radius: 8px;
    border-left: 10px solid ${colors.errorStrong};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    min-height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 30px;
    max-width: 500px;

    ${mq.small} {
      min-height: inherit;
      width: 90%;
    }
  `;

  const buttonsContainer = css`
    align-self: flex-end;
    margin-top: 10px;

    > button {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }

    ${mq.small} {
      margin-top: 30px;
    }

    ${mq.xsmall} {
      display: flex;
    }
  `;
  const spacing = css`
    height: 10px;
  `;

  const containerTitle = css`
    display: flex;
    align-items: center;
  `;

  return (
    <Overlay overlayOpacity={overlayOpacity} zIndex={zIndex}>
      <div css={container}>
        <div>
          <div css={containerTitle}>
            {Boolean(iconType) && (
              <Icon size={iconSize} type={iconType} hasMargin />
            )}
            <Text size="XL" weight="semibold">
              {title}
            </Text>
          </div>
          <div css={spacing} />
          <Text size="M">{message}</Text>
        </div>
        <div css={buttonsContainer}>
          {Boolean(secondaryButton) && (
            <Button
              variant="default"
              text={secondaryButton}
              onClick={onClickSecondary}
            />
          )}
          <Button
            variant="danger"
            text={primaryButton}
            onClick={onClickPrimary}
          />
        </div>
      </div>
    </Overlay>
  );
};

DialogMessage.propTypes = {
  /** Message title */
  title: PropTypes.string,
  /** Message description */
  message: PropTypes.string,
  /** Text for primary `<button>` */
  primaryButton: PropTypes.string.isRequired,
  /** Text for secondary `<button>` */
  secondaryButton: PropTypes.string,
  /** Callback onClick primary `<button>` */
  onClickPrimary: PropTypes.func.isRequired,
  /** Callback onClick secondary `<button>` */
  onClickSecondary: PropTypes.func,
  /** Shows fade screen */
  overlayOpacity: PropTypes.number,
  /** `z-index` value - Default `900` */
  zIndex: PropTypes.number,
  /** Icon for Dialog Message  */
  iconType: PropTypes.string,
  /** Defines icon size  */
  iconSize: PropTypes.oneOf(['S', 'M', 'L', 'XL']),
};

DialogMessage.defaultProps = {
  title: '',
  message: '',
  iconType: '',
  secondaryButton: '',
  onClickSecondary: null,
  zIndex: zIndexes.fristLayer,
  iconSize: 'M',
  overlayOpacity: 0.7,
};

export default DialogMessage;
