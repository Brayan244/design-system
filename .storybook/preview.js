import React from 'react';
import { addDecorator } from '@storybook/react';
import { Global } from '@emotion/core';
import globalReset from '../src/globals/reset';

addDecorator(storyFn => (
  <>
    <Global styles={globalReset} />
    {storyFn()}
  </>
));
