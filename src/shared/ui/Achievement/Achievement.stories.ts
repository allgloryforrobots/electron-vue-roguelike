import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Achievement from './Achievement.vue';

const meta: Meta<typeof Achievement> = {
  title: 'shared/Achievement',
  component: Achievement,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок достижения'
    },
    description: {
      control: 'text',
      description: 'Описание достижения'
    },
    icon: {
      control: 'text',
      description: 'Иконка достижения'
    },
    date: {
      control: 'text',
      description: 'Дата получения'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Achievement>;

export const Default: Story = {
  args: {
    title: 'Первое достижение',
    description: 'Вы успешно завершили свой первый уровень!',
    icon: '🏆',
    date: '15.12.2023'
  }
};

export const WithoutDate: Story = {
  args: {
    title: 'Неполученное достижение',
    description: 'Это достижение еще не получено',
    icon: '🔒'
  }
};