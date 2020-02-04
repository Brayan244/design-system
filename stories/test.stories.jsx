import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Test from '../src/atoms/test';

export default {
  title: 'Test|Test',
  component: Test,
};

export const TestStory = () => (
  <Test important={boolean('Is Important', false)} />
);
