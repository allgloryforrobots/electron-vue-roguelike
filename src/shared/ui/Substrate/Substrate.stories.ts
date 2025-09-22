import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Substrate from './Substrate.vue';

const meta: Meta<typeof Substrate> = {
  title: 'shared/Substrate',
  component: Substrate,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'text' },
      description: 'Ширина компонента (px, %, rem и т.д.)'
    },
    height: {
      control: { type: 'text' },
      description: 'Высота компонента (px, %, rem и т.д.)'
    },
  }
};

export default meta;

type Story = StoryObj<typeof Substrate>;

// Базовая история
export const Default: Story = {
  args: {
    width: '200px',
    height: '100px'
  },
  render: (args) => ({
    components: { Substrate },
    setup() {
      return { args };
    },
    template: `
      <Substrate v-bind="args">
        Контент внутри подложки
      </Substrate>
    `
  })
};

// С числовыми значениями
export const WithNumberValues: Story = {
  args: {
    width: 250,
    height: 80
  },
  render: (args) => ({
    components: { Substrate },
    setup() {
      return { args };
    },
    template: `
      <Substrate v-bind="args">
        Размеры в пикселях
      </Substrate>
    `
  })
};