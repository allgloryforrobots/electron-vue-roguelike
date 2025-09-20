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

export const Default: Story = {
  args: {
  },
  render: (args) => ({
    components: { Header },
    setup() { return { args }; },
    template: '<Header v-bind="args">Текст</Header>'
  })
};

export const LongText: Story = {
  args: {
  },
  render: (args) => ({
    components: { Header },
    setup() { return { args }; },
    template: '<Header v-bind="args">Очень длинный заголовок</Header>'
  })
};
