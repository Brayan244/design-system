import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { Global } from '@emotion/core';
import globalReset from '../src/globals/reset';

addDecorator(storyFn => (
  <>
    <Global styles={globalReset} />
    {storyFn()}
  </>
));

addDecorator(withA11y);
