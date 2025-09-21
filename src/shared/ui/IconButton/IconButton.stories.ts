import type { Meta, StoryObj } from '@storybook/vue3-vite';
import IconButton from './IconButton.vue';

const meta: Meta<typeof IconButton> = {
  title: 'shared/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// Базовая история с текстовым содержимым
export const Default: Story = {
  args: {
    iconCls: 'fa-star',
  },
};