import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import sadFace from '../../images/sad-face.svg';
import happyFace from '../../images/happy-face.svg';

const MyLife = ({ isImportant }) => {
  const styles = css`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  `;

  const imageCss = css`
    width: 200px;
  `;

  const imageSrc = isImportant ? happyFace : sadFace;

  return (
    <div css={styles}>
      <div>
        <h1>Story of my life</h1>

        <p>
          Life goes by so fast
          <br />
          You only wanna do what you think is right
          <br />
          Close your eyes and it&apos;s past
          <br />
          Story of my life
          <br />
          <br />
          Story of my life
          <br />
          Story of my life
          <br />
          Story of my life
        </p>
      </div>

      <div>
        <img src={imageSrc} css={imageCss} alt="mood face" />
      </div>
    </div>
  );
};

MyLife.propTypes = {
  /** Is my life important? */
  isImportant: PropTypes.bool,
};

MyLife.defaultProps = {
  isImportant: false,
};

export default MyLife;
