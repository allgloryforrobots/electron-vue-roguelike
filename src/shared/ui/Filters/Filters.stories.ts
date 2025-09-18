import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Filters from './Filters.vue';

const meta: Meta<typeof Filters> = {
  title: 'shared/Filters',
  component: Filters,
  tags: ['autodocs'],
  argTypes: {
    activeFilter: {
      control: 'text',
      description: 'ID активного фильтра'
    },
    filters: {
      control: 'object',
      description: 'Массив объектов фильтров'
    },
  }
};

export default meta;

type Story = StoryObj<typeof Filters>;

// Базовые данные для фильтров
const defaultFilters = [
  { id: 'all', label: 'Все' },
  { id: 'active', label: 'Активные' },
  { id: 'completed', label: 'Завершенные' }
];

export const Default: Story = {
  args: {
    activeFilter: 'all',
    filters: defaultFilters
  }
};

export const ActiveFilter: Story = {
  args: {
    activeFilter: 'active',
    filters: defaultFilters
  }
};

export const WithLongLabels: Story = {
  args: {
    activeFilter: 'long',
    filters: [
      { id: 'short', label: 'Короткий' },
      { id: 'medium', label: 'Средней длины текст' },
      { id: 'long', label: 'Очень длинное название фильтра которое может не поместиться' }
    ]
  }
};
