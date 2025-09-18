import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Frame from './Frame.vue';

const meta: Meta<typeof Frame> = {
  title: 'shared/Frame',
  component: Frame,
  tags: ['autodocs'],
  argTypes: {
  }
};

export default meta;

type Story = StoryObj<typeof Frame>;

export const Default: Story = {
  render: () => ({
    components: { Frame },
    template: `
      <Frame>
        <p>Это содержимое внутри фрейма</p>
        <p>Простой текст с рамкой и декоративными элементами</p>
      </Frame>
    `
  })
};
