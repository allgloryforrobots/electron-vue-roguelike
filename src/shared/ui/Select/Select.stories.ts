import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Select from './Select.vue';
import { ref } from 'vue';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Массив опций для выбора'
    },
    modelValue: {
      control: 'text',
      description: 'Выбранное значение (v-model)'
    },
    defaultText: {
      control: 'text',
      description: 'Текст по умолчанию при отсутствии выбора'
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Базовая история с изменяемым значением
export const Default: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selectedValue = ref<string | null>(null);
      return { args, selectedValue };
    },
    template: `
      <div>
        <Select
          v-bind="args"
          v-model="selectedValue"
        />
      </div>
    `,
  }),
  args: {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    defaultText: 'Select an option',
  },
};

// С предварительно выбранным значением
export const WithSelectedValue: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selectedValue = ref('TypeScript');
      return { args, selectedValue };
    },
    template: `
      <div>
        <Select
          v-bind="args"
          v-model="selectedValue"
        />
      </div>
    `,
  }),
  args: {
    options: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
    defaultText: 'Choose programming language',
  },
};