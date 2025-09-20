import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Container from './Container.vue';

const meta: Meta<typeof Container> = {
  title: 'shared/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Направление расположения элементов'
    },
    gap: {
      control: 'number',
      description: 'Расстояние между элементами в пикселях'
    }
  },
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Container>;


export const Vertical: Story = {
  args: {
    direction: 'vertical',
    gap: 15
  },
  render: (args) => ({
    components: { Container },
    setup() {
      return { args };
    },
    template: `
      <Container
        :direction="args.direction"
        :gap="args.gap"
      >
        <div style="padding: 10px; background: rgba(56, 47, 39, 0.7); border-radius: 4px; color: var(--accent-color-2);">
          Первый элемент
        </div>
        <div style="padding: 10px; background: rgba(56, 47, 39, 0.7); border-radius: 4px; color: var(--accent-color-2);">
          Второй элемент
        </div>
        <div style="padding: 10px; background: rgba(56, 47, 39, 0.7); border-radius: 4px; color: var(--accent-color-2);">
          Третий элемент
        </div>
      </Container>
    `
  })
};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    gap: 15
  },
  render: (args) => ({
    components: { Container },
    setup() {
      return { args };
    },
    template: `
      <Container
        :direction="args.direction"
        :gap="args.gap"
      >
        <div style="padding: 10px; background: rgba(56, 47, 39, 0.7); border-radius: 4px; color: var(--accent-color-2);">
          Первый элемент
        </div>
        <div style="padding: 10px; background: rgba(56, 47, 39, 0.7); border-radius: 4px; color: var(--accent-color-2);">
          Второй элемент
        </div>
        <div style="padding: 10px; background: rgba(56, 47, 39, 0.7); border-radius: 4px; color: var(--accent-color-2);">
          Третий элемент
        </div>
      </Container>
    `
  })
};