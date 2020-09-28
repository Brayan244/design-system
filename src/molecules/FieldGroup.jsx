import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import FieldLabel from '../atoms/FieldLabel';

const FieldGroup = ({ label, children }) => {
  const selectGroup = css`
    position: relative;
    margin-top: 20px;
  `;

  return (
    <div>
      <div css={selectGroup}>
        <FieldLabel text={label} />

        {children}
      </div>
    </div>
  );
};

FieldGroup.propTypes = {
  children: PropTypes.node.isRequired,
  /** The label for the field group */
  label: PropTypes.string.isRequired,
};

export default FieldGroup;
