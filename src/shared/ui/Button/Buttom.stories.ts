import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Button from './Button.vue';
import { fn } from 'storybook/test';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
      onClick: fn(),
  },
}

export default meta;

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    onClick: fn(),
  },
  render: (args) => ({
    components: { Button },
    setup() { return { args }; },
    template: '<Button v-bind="args">Текст</Button>'
  })
}