import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Highlight from './Highlight.vue';

const meta: Meta<typeof Highlight> = {
  title: 'shared/Highlight',
  component: Highlight,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок блока',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Выделенный блок с градиентным фоном и декоративными элементами',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Highlight>;

// Базовая история с текстовым содержимым
export const Default: Story = {
  args: {
    title: 'Важная информация',
  },
  render: (args) => ({
    components: { Highlight },
    setup() {
      return { args };
    },
    template: `
      <Highlight v-bind="args">
        <p>Это содержимое выделенного блока. Здесь может быть важная информация, предупреждение или просто заметка.</p>
      </Highlight>
    `,
  }),
};