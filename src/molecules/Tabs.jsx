import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import TabHeader from './TabHeader';

const Tabs = ({ children, active, onTabChange, headerGrow }) => {
  const [activeTab, setActiveTab] = useState(active);

  useEffect(() => {
    setActiveTab(active);
  }, [active]);

  const tabHeader = css`
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #ebebeb;
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

      <div>
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
  children: PropTypes.node.isRequired,
  onTabChange: PropTypes.func,
  active: PropTypes.number,
  headerGrow: PropTypes.bool,
};

Tabs.defaultProps = {
  active: 0,
  onTabChange: () => {},
  headerGrow: false,
};

export default Tabs;
