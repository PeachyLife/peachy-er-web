import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Some Peachy By!</Button>
  ))
  .add('with 🍑s', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so peachy">🍑🍑🍑</span></Button>
  ));
