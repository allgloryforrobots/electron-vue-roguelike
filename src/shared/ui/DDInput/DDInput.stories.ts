import type { Meta, StoryObj } from '@storybook/vue3-vite';
import DDInput from './DDInput.vue';

const meta: Meta<typeof DDInput> = {
  title: 'shared/DDInput',
  component: DDInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Значение DDInput'
    },
  }
};

export default meta;

type Story = StoryObj<typeof DDInput>;

export const Default: Story = {
  args: {

  }
};

export const WithValue: Story = {
  args: {
    modelValue: 'Текст по умолчанию',
  }
};
