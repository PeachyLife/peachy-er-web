import React from 'react';
import { storiesOf } from '@storybook/react'

const Welcome = () => (
  <div>Welcome!</div>
)

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);
