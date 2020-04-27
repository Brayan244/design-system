import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { Global } from '@emotion/core';
import { addParameters } from '@storybook/react';
import globalReset from '../src/globals/reset';
import backgroundColors from './backgroundColors';

addDecorator(storyFn => (
  <>
    <Global styles={globalReset} />
    {storyFn()}
  </>
));

addDecorator(withA11y);

addParameters({
  backgrounds: backgroundColors,
});
