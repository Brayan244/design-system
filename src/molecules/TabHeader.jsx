import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Spacing from '../atoms/Spacing';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

const TabHeader = ({ isActive, onSelect, iconType, label, flexGrow }) => {
  const activeStyle = css`
    border-bottom: 2px solid #cf348c;
    padding: 10px 20px;
    display: flex;
    cursor: pointer;
    font-weight: 700;
    flex: ${flexGrow ? '1' : null};
    justify-content: ${flexGrow ? 'center' : null};
  `;

  const normalStyles = css`
    padding: 10px 20px;
    display: flex;
    cursor: pointer;
    flex: ${flexGrow ? '1' : null};
    justify-content: ${flexGrow ? 'center' : null};
  `;

  return (
    <div
      css={isActive ? activeStyle : normalStyles}
      onClick={onSelect}
      role="presentation"
    >
      <Spacing alignItems="center" size="XS">
        {Boolean(iconType) && <Icon type={iconType} size="S" />}
        <Text weight={isActive ? 'bold' : 'regular'} size="S">
          {label}
        </Text>
      </Spacing>
    </div>
  );
};

TabHeader.propTypes = {
  label: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  /** Let all the flexible items be the same length adding `flex-grow: 1` */
  flexGrow: PropTypes.bool,
};

TabHeader.defaultProps = {
  iconType: '',
  flexGrow: false,
};

export default TabHeader;
