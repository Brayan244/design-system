import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import hover from './test.styles';

const propTypes = {
  important: PropTypes.bool.isRequired,
};

const Test = ({ important = true }) => {
  const testStyle = css`
    height: 100px;
    width: 100px;
    border: 5px solid black;
    ${hover};
    background-color: #0000ff;
    border-color: ${important ? 'red' : 'white'};
  `;

  const overwrite = css`
    ${testStyle};
    margin-left: 50px;
    color: white;
  `;

  return (
    <div className={testStyle}>
      hola, cómo estás?
      <p className={overwrite}>overwritten</p>
    </div>
  );
};

Test.propTypes = propTypes;

export default Test;
