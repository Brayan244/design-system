import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { hover } from './test.styles';
import * as mq from '../globals/mediaqueries';
import * as colors from '../tokens/colors';
import '../globals/reset';

const userPhoto =
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';

const propTypes = {
  important: PropTypes.bool.isRequired,
};

const Test = ({ important = true }) => {
  const testStyle = css`
    height: 100px;
    width: 100px;
    border: 5px solid #000000;
    ${hover};
    background-color: ${colors.gray100};
    border-color: ${important ? colors.error : colors.gray200};
    font-family: 'Open Sans', sans-serif;

    ${mq.small} {
      background-color: #ff0000;
    }
  `;

  const overwrite = css`
    margin-left: 50px;
    color: ${colors.primary};
    border-color: ${colors.accent};
    background-image: url(${userPhoto});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `;

  return (
    <>
      <div css={testStyle}>
        hola, cómo estás?
        <p css={overwrite}>overwritten</p>
      </div>
      <p css="some-class">overwritten</p>
    </>
  );
};

Test.propTypes = propTypes;

export default Test;
