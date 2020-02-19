import { keyframes } from '@emotion/core';

export default keyframes`
  0% {
    transform: translateY(-100%);
    visibility: visible;
  }

  100% {
    transform: translateY(0);
    visibility: hidden;
  }
`;
