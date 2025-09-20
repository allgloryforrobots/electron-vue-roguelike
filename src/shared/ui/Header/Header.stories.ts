import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Header from './Header.vue';

const meta: Meta<typeof Header> = {
  title: 'shared/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Основной текст заголовка',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Заголовок с декоративными элементами и переводом на "древний язык"',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Базовая история
export const Default: Story = {
  args: {
    default: 'Заголовок страницы',
  },
};

// Длинный текст
export const LongText: Story = {
  args: {
    default: 'Очень длинный заголовок страницы который может занимать несколько строк',
  },
};