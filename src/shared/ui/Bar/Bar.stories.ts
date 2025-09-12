import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Bar from './Bar.vue';

const meta: Meta<typeof Bar> = {
  title: 'shared/Bar',
  component: Bar,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['health', 'mana']
    },
    percent: {
      control: { type: 'range', min: 0, max: 100 }
    }
  },
  args: {
    variant: "health",
    percent: 50,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HealthBar: Story = {
  args: {
    variant: "health",
    percent: 75,
  },
};

export const ManaBar: Story = {
  args: {
    variant: "mana",
    percent: 25,
  },
};

export const EmptyBar: Story = {
  args: {
    percent: 0,
  },
};

export const FullBar: Story = {
  args: {
    percent: 100,
  },
};