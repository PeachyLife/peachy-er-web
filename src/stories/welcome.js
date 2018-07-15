import React from 'react';
import { storiesOf } from '@storybook/react'

const Welcome = () => (
  <div>Welcome to the Peachy storybook!</div>
)

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);
