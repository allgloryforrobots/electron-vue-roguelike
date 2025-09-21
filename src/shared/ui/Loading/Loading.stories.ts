import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Loading from './Loading.vue';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Текст рядом с индикатором загрузки',
      defaultValue: 'Загрузка...'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    text: 'Загрузка...'
  }
};