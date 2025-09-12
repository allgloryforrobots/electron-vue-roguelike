import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import ButtonTemplate from './ButtonTemplate.vue';


const meta = {
  title: 'Example/ButtonTemplate',
  component: ButtonTemplate,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  args: {
    primary: false,
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'ButtonTemplate',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'ButtonTemplate',
  },
};

export const Large: Story = {
  args: {
    label: 'ButtonTemplate',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'ButtonTemplate',
    size: 'small',
  },
};
