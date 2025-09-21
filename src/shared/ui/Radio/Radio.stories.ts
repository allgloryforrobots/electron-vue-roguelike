import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Radio from './Radio.vue';
import { ref } from 'vue';

const meta: Meta<typeof Radio> = {
  title: 'shared/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Кастомный компонент радио-кнопки с поддержкой v-model'
      }
    }
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Значение радио-кнопки',
      defaultValue: 'option1'
    },
    label: {
      control: 'text',
      description: 'Текст метки',
      defaultValue: 'Опция 1'
    },
    modelValue: {
      control: 'text',
      description: 'Выбранное значение (v-model)',
      defaultValue: ''
    }
  },
  args: {
    value: 'option1',
    label: 'Опция 1',
    modelValue: ''
  }
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};


// Группа радио-кнопок
export const RadioGroup: Story = {
  render: () => ({
    components: { Radio },
    setup() {
      const selectedValue = ref('option2');
      return { selectedValue };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <h4 style="color: var(--text-color); margin-bottom: 10px;">Выберите опцию:</h4>
        <Radio
          v-model="selectedValue"
          value="option1"
          label="Первая опция"
        />
        <Radio
          v-model="selectedValue"
          value="option2"
          label="Вторая опция"
        />
        <Radio
          v-model="selectedValue"
          value="option3"
          label="Третья опция"
        />
        <p style="color: var(--text-color); margin-top: 15px;">
          Выбрано: {{ selectedValue }}
        </p>
      </div>
    `
  })
};
