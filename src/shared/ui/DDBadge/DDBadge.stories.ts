import type { Meta, StoryObj } from '@storybook/vue3-vite';
import DdBadge from './DDBadge.vue'; 

const meta: Meta<typeof DdBadge> = {
  title: 'Components/Badge',
  component: DdBadge,
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

type Story = StoryObj<typeof DdBadge>;

export const Common: Story = {
  args: {
    type: 'common'
  },
  render: (args) => ({
    components: { DdBadge },
    setup() { return { args }; },
    template: '<dd-badge v-bind="args">Common</dd-badge>'
  })
};

export const Important: Story = {
  args: {
    type: 'important'
  },
  render: (args) => ({
    components: { DdBadge },
    setup() { return { args }; },
    template: '<dd-badge v-bind="args">Important</dd-badge>'
  })
};

export const Warn: Story = {
  args: {
    type: 'warn'
  },
  render: (args) => ({
    components: { DdBadge },
    setup() { return { args }; },
    template: '<dd-badge v-bind="args">Warn</dd-badge>'
  })
};