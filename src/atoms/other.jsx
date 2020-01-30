import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { hover, red } from './test.styles';
import * as colors from '../tokens/colors';
import globalStyles from '../globals/reset';

const emotionLogo =
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';

const propTypes = {
  important: PropTypes.bool.isRequired,
};

const Test = ({ important = true }) => {
  const testStyle = css`
    height: 100px;
    width: 100px;
    border: 5px solid gold;
    ${hover};
    background-color: ${colors.gray500};
    border-color: ${important ? red : 'blue'};
    font-family: 'Open Sans', sans-serif;
  `;

  const overwrite = css`
    margin-left: 50px;
    color: ${red};
    background-color: #00ffff;
    background-image: url(${emotionLogo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `;

  return (
    <>
      <Global styles={globalStyles} />

      <div css={testStyle}>
        hola, cómo estás?
        <p css={[testStyle, overwrite]}>overwritten</p>
      </div>
      <p css="some-class">overwritten</p>
    </>
  );
};

Test.propTypes = propTypes;

export default Test;
