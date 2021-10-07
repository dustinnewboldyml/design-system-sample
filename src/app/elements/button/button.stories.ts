import { Story, Meta } from '@storybook/web-components';
import { html } from 'lit';
import './button';

export default {
  title: 'Elements/Button',
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;

export const Primary = () => html`<app-button></app-button>`;
