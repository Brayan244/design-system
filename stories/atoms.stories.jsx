import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Other from '../src/atoms/other';

export default {
  title: 'Test',
  component: Other,
};

export const OtherStory = () => (
  <Other important={boolean('Is Important', false)} />
);
