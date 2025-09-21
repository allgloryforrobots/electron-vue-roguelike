import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Notice from './Notice.vue';

const meta: Meta<typeof Notice> = {
  title: 'Components/Notice',
  component: Notice,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент уведомления с градиентным фоном и иконкой'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок уведомления',
      defaultValue: 'Внимание'
    },
    content: {
      control: 'text',
      description: 'Содержимое уведомления',
      defaultValue: 'Это важное уведомление для пользователя'
    }
  },

};

export default meta;
type Story = StoryObj<typeof Notice>;

export const Default: Story = {
    args: {
        title: 'Внимание',
        content: 'Это важное уведомление для пользователя'
    }
};

