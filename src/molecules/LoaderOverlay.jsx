import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/core';
import * as zIndexes from '../tokens/zIndexes';
import Spacing from '../atoms/Spacing';
import Text from '../atoms/Text';
import Overlay from '../atoms/Overlay';
import logo from '../../images/logo-white.svg';

const LoaderOverlay = ({ text, imgSrc, zIndex, overlayOpacity }) => {
  const bounce = keyframes`
    0% {
      transform: rotate(0deg);
    }
       
    100% {
      transform: rotate(360deg);
    }
  `;

  const pulse = keyframes`
    0%, 100% {
      opacity: 0.3;
    }
    
    50% {
      opacity: 1;
    }
  `;

  const loaderWrapper = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const svgStyle = css`
    width: 130px;
    height: 130px;
    animation: ${bounce} 1s linear infinite;
  `;

  const imageContainer = css`
    animation: ${pulse} 2s infinite ease-in-out;
    position: absolute;
    width: 50px;
    height: 50px;
    background-image: url(${imgSrc});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  `;

  return (
    <Overlay overlayOpacity={overlayOpacity} zIndex={zIndex}>
      <Spacing vertical alignItems="center">
        <div css={loaderWrapper}>
          <div css={imageContainer} />
          <svg
            css={svgStyle}
            viewBox="0 0 130 130"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="5%" stopColor="#CE348B10" />
                <stop offset="95%" stopColor="#CE348B" />
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M65,0 C100.898509,0 130,29.1014913 130,65 C130,100.898509 100.898509,130 65,130 C29.1014913,130 0,100.898509 0,65 C0,29.1014913 29.1014913,0 65,0 Z M65,7.06521739 C33.0035031,7.06521739 7.06521739,33.0035031 7.06521739,65 C7.06521739,96.9964969 33.0035031,122.934783 65,122.934783 C96.9964969,122.934783 122.934783,96.9964969 122.934783,65 C122.934783,33.0035031 96.9964969,7.06521739 65,7.06521739 Z"
                fillRule="nonzero"
                fill="url(#MyGradient)"
              />
            </g>
          </svg>
        </div>
        {Boolean(text) && (
          <Text color="white" size="XL" weight="semibold">
            <i>{text}</i>
          </Text>
        )}
      </Spacing>
    </Overlay>
  );
};

LoaderOverlay.propTypes = {
  /** Logo url or base64 img. If this prop is used, `grayLogo` is ignored */
  imgSrc: PropTypes.string,
  /** Message */
  text: PropTypes.string,
  /** Value for `z-index` */
  zIndex: PropTypes.number,
  /** Value for `opacity` on Overlay  */
  overlayOpacity: PropTypes.number,
};

LoaderOverlay.defaultProps = {
  text: '',
  imgSrc: logo,
  overlayOpacity: 0.7,
  zIndex: zIndexes.fristLayer,
};

export default LoaderOverlay;
