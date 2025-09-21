import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Notification from './Notification.vue';

const meta: Meta<typeof Notification> = {
  title: 'shared/Notification',
  component: Notification,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент системы уведомлений с возможностью скрытия'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <Notification />
    `
  })
};


