import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PageHeader from './PageHeader.vue';

const meta: Meta<typeof PageHeader> = {
  title: 'shared/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Основной заголовок страницы'
    },
    subtitle: {
      control: 'text',
      description: 'Дополнительный подзаголовок (опционально)'
    }
  }
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: 'Заголовок страницы',
    subtitle: 'Дополнительное описание или подзаголовок'
  }
};

export const WithoutSubtitle: Story = {
  args: {
    title: 'Заголовок без подзаголовка'
  }
};

export const LongTitle: Story = {
  args: {
    title: 'Очень длинный заголовок страницы который может занимать несколько строк',
    subtitle: 'И соответствующий длинный подзаголовок для демонстрации поведения компонента'
  }
};