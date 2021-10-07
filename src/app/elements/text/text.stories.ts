import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './text';

export default {
  title: 'Elements/Text',
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

export const Display1 = () => html`<app-text></app-text>`;
