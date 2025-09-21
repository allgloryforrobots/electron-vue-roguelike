import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Icon from './Icon.vue';

const meta: Meta<typeof Icon> = {
  title: 'shared/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: 'fa-star',
  },
};