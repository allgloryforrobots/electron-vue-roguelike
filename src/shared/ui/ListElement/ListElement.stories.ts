import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ListElement from './ListElement.vue';

const meta: Meta<typeof ListElement> = {
  title: 'shared/ListElement',
  component: ListElement,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'square', 'other-variants'],
    },
    disabled: {
      control: 'boolean',
    },
    tooltip: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListElement>;

export const Default: Story = {
  args: {
    disabled: false,
    tooltip: 'This is a default element',
  },
  render: (args) => ({
    components: { ListElement },
    setup() {
      return { args };
    },
    template: `
      <ListElement v-bind="args">
        Default Element
      </ListElement>
    `,
  }),
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    tooltip: 'This element is disabled',
  },
  render: (args) => ({
    components: { ListElement },
    setup() {
      return { args };
    },
    template: `
      <ListElement v-bind="args">
        Disabled Element
      </ListElement>
    `,
  }),
};