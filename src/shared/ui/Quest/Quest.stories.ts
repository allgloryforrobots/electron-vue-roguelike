import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Quest from './Quest.vue';

const meta: Meta<typeof Quest> = {
  title: 'shared/Quest',
  component: Quest,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент карточки квеста с иконкой меча и градиентным фоном'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Название квеста',
      defaultValue: 'Потерянная реликвия'
    },
    description: {
      control: 'text',
      description: 'Описание квеста',
      defaultValue: 'Найдите древнюю реликвию в заброшенных руинах храма.'
    },
    difficulty: {
      control: 'text',
      description: 'Уровень сложности квеста',
      defaultValue: 'Средняя'
    },
    reward: {
      control: 'text',
      description: 'Награда за выполнение квеста',
      defaultValue: '100 золотых, магический артефакт'
    }
  },
  args: {
    title: 'Потерянная реликвия',
    description: 'Найдите древнюю реликвию в заброшенных руинах храма.',
    difficulty: 'Средняя',
    reward: '100 золотых, магический артефакт'
  }
};

export default meta;
type Story = StoryObj<typeof Quest>;

export const Default: Story = {};

export const EasyQuest: Story = {
  args: {
    title: 'Сбор трав',
    description: 'Соберите 10 целебных трав в ближайшем лесу.',
    difficulty: 'Легкая',
    reward: '25 золотых, зелье здоровья'
  }
};


