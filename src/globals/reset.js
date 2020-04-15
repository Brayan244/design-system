import { css } from '@emotion/core';

export default css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');

  html {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;

    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  input,
  select {
    appearance: none;
    border-radius: 0;
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    margin: 0;
  }

  input::-ms-clear {
    display: none;
    height: 0;
    width: 0;
  }

  select::-ms-expand {
    display: none;
  }

  button {
    border: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    background-color: transparent;
  }
`;
