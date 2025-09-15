import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Badge from './Badge.vue'; 

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
    argTypes: {
    type: {
        control: { type: 'select' },
        options: ['common', 'important', 'warn'],
        description: 'Тип бейджа, определяющий его внешний вид',
        table: {
            type: { 
                summary: 'string',
                detail: 'Определяет цветовую схему бейджа'
            },
            defaultValue: { summary: 'common' }
        }
        }
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Common: Story = {
  args: {
    type: 'common'
  },
  render: (args) => ({
    components: { Badge },
    setup() { return { args }; },
    template: '<badge v-bind="args">Common</badge>'
  })
};

export const Important: Story = {
  args: {
    type: 'important'
  },
  render: (args) => ({
    components: { Badge },
    setup() { return { args }; },
    template: '<badge v-bind="args">Important</badge>'
  })
};

export const Warn: Story = {
  args: {
    type: 'warn'
  },
  render: (args) => ({
    components: { Badge },
    setup() { return { args }; },
    template: '<badge v-bind="args">Warn</badge>'
  })
};