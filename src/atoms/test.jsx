import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import hover from './test.styles';

const propTypes = {
  important: PropTypes.bool.isRequired,
};

const Test = ({ important = true }) => {
  const testStyle = css`
    height: 100px;
    width: 100px;
    border: 5px solid #000000;
    ${hover};
    background-color: #0000ff;
    border-color: ${important ? 'red' : 'white'};
  `;

  const overwrite = css`
    margin-left: 50px;
    color: #ffffff;
  `;

  return (
    <div css={testStyle}>
      hola, cómo estás?
      <p css={[testStyle, overwrite]}>overwritten</p>
    </div>
  );
};

Test.propTypes = propTypes;

export default Test;
