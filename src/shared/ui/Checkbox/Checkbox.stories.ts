import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

const meta: Meta<typeof Checkbox> = {
  title: 'shared/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Состояние чекбокса'
    },
    label: {
      control: 'text',
      description: 'Текст метки'
    }
  },
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Чекбокс',
    modelValue: false
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <Checkbox
        v-model="value"
        :label="args.label"
      />
    `
  })
};

export const Checked: Story = {
  args: {
    label: 'Выбранный чекбокс',
    modelValue: true
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <Checkbox
        v-model="value"
        :label="args.label"
      />
    `
  })
};

export const WithoutLabel: Story = {
  args: {
    label: "",
    modelValue: false
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <Checkbox v-model="value" />
    `
  })
};

export const MultipleCheckboxes: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const options = ref([
        { id: 1, label: 'Опция 1', checked: false },
        { id: 2, label: 'Опция 2', checked: true },
        { id: 3, label: 'Опция 3', checked: false }
      ]);
      
      return { options };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Checkbox
          v-for="option in options"
          :key="option.id"
          v-model="option.checked"
          :label="option.label"
        />
      </div>
    `
  })
};

export const DisabledState: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true);
      const unchecked = ref(false);
      
      return { checked, unchecked };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Checkbox
          v-model="checked"
          label="Активный выбранный"
        />
        <Checkbox
          v-model="unchecked"
          label="Активный невыбранный"
        />
      </div>
    `
  })
};