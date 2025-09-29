import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Tooltip from './Tooltip.vue';

const meta = {
  title: 'shared/TooltipAlt',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    text: {
      control: { type: 'text' },
    },
  },
  args: {
    text: 'This is a tooltip',
    position: 'top',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is a default tooltip',
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args };
    },
    template: `
        <Tooltip v-bind="args">
          Hover over me
        </Tooltip>
    `,
  }),
};

export const Top: Story = {
  args: {
    text: 'Tooltip on top',
    position: 'top',
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args };
    },
    template: `
        <Tooltip v-bind="args">
          Top tooltip
        </Tooltip>
    `,
  }),
};

export const Right: Story = {
  args: {
    text: 'Tooltip on right',
    position: 'right',
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args };
    },
    template: `
        <Tooltip v-bind="args">
          Right tooltip
        </Tooltip>
    `,
  }),
};

export const Bottom: Story = {
  args: {
    text: 'Tooltip on bottom',
    position: 'bottom',
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args };
    },
    template: `
        <Tooltip v-bind="args">
          Bottom tooltip
        </Tooltip>
    `,
  }),
};

export const Left: Story = {
  args: {
    text: 'Tooltip on left',
    position: 'left',
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args };
    },
    template: `
        <Tooltip v-bind="args">
          Left tooltip
        </Tooltip>
    `,
  }),
};