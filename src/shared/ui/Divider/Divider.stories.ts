import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Divider from './Divider.vue';

const meta: Meta<typeof Divider> = {
  title: 'shared/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    // Компонент не принимает пропсы, только слот
  }
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div>
        <p>Контент выше</p>
        <Divider />
        <p>Контент ниже</p>
      </div>
    `
  })
};

export const WithCustomText: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div>
        <p>Контент выше</p>
        <Divider>Или</Divider>
        <p>Контент ниже</p>
      </div>
    `
  })
};