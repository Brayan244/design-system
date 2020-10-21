import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import TabHeader from './TabHeader';
import * as mq from '../globals/mediaqueries';

const Tabs = ({
  children,
  active,
  onTabChange,
  headerGrow,
  removeContentPadding,
}) => {
  const [activeTab, setActiveTab] = useState(active);

  useEffect(() => {
    setActiveTab(active);
  }, [active]);

  const tabHeader = css`
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #ebebeb;
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const tabContent = css`
    padding: ${removeContentPadding ? null : `0 30px 10px`};

    ${mq.small} {
      padding: ${removeContentPadding ? null : `0 10px 10px`};
    }
  `;

  function handleTabChange(index) {
    setActiveTab(index);
    onTabChange(index);
  }

  return (
    <div>
      <div css={tabHeader}>
        {children.map((tab, index) => {
          if (!tab) return null;

          const generatedId = `tab-header-${index}`;
          return (
            <TabHeader
              isActive={activeTab === index}
              onSelect={() => handleTabChange(index)}
              key={generatedId}
              iconType={tab.props.iconType}
              label={tab.props.label}
              flexGrow={headerGrow}
            />
          );
        })}
      </div>

      <div css={tabContent}>
        {children.map((content, index) => {
          if (!content) return null;

          const generatedId = `tab-${index}`;
          return activeTab === index && <div key={generatedId}>{content}</div>;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  /** Content */
  children: PropTypes.node.isRequired,
  onTabChange: PropTypes.func,
  /** Defines which tab is active */
  active: PropTypes.number,
  /** Adds flexGrow to TabHeader  */
  headerGrow: PropTypes.bool,
  /** Removes tab's content padding */
  removeContentPadding: PropTypes.bool,
};

Tabs.defaultProps = {
  active: 0,
  onTabChange: () => {},
  headerGrow: false,
  removeContentPadding: false,
};

export default Tabs;
