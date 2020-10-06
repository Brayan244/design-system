import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import TabHeader from './TabHeader';

const Tabs = ({ children, active, onTabChange }) => {
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
          const generatedId = `tab-header-${index}`;
          return (
            <TabHeader
              isActive={activeTab === index}
              onSelect={() => handleTabChange(index)}
              key={generatedId}
              iconType={tab.props.iconType}
              label={tab.props.label}
            />
          );
        })}
      </div>

      <div>
        {children.map((content, index) => {
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
};

Tabs.defaultProps = {
  active: 0,
  onTabChange: () => {},
};

export default Tabs;