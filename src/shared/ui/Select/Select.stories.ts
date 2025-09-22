import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Select from './Select.vue';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Стилизованный выпадающий список с кастомными стрелками'
      }
    }
  },
  argTypes: {
    options: {
      control: 'object',
      description: 'Массив опций для выбора',
      defaultValue: ['Опция 1', 'Опция 2', 'Опция 3']
    },
    modelValue: {
      control: 'text',
      description: 'Выбранное значение (v-model)',
      defaultValue: ''
    }
  },
  args: {
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    modelValue: ''
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      'Первый вариант',
      'Второй вариант',
      'Третий вариант',
      'Четвертый вариант',
      'Пятый вариант',
      'Шестой вариант',
      'Седьмой вариант'
    ]
  }
};



