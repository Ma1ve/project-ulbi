import { StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';

// import React from 'react';

export const StyleDecorator = (Story: StoryFn) => (
  // <div style={{ outline: '16px dotted purple' }}>
  <Story />
  // </div>
);
