// DDButton.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import DDButton from './DDbutton.vue';

const meta: Meta<typeof DDButton> = {
  title: 'shared/DDButton',
  component: DDButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Состояние отключения кнопки'
    }
  }
};

export default meta;

type Story = StoryObj<typeof DDButton>;

export const Primary: Story = {
  args: {
    disabled: false
  },
  render: (args) => ({
    components: { DDButton },
    setup() { return { args }; },
    template: '<DDButton v-bind="args">Основная кнопка</DDButton>'
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => ({
    components: { DDButton },
    setup() { return { args }; },
    template: '<DDButton v-bind="args">Отключенная кнопка</DDButton>'
  })
};

export const DifferentSizes: Story = {
  render: (args) => ({
    components: { DDButton },
    setup() { return { args }; },
    template: `
      <div style="display: flex; gap: 10px; align-items: center;">
        <DDButton v-bind="args" style="padding: 5px 10px; font-size: 12px;">Маленькая</DDButton>
        <DDButton v-bind="args">Стандартная</DDButton>
        <DDButton v-bind="args" style="padding: 15px 30px; font-size: 16px;">Большая</DDButton>
      </div>
    `
  })
};