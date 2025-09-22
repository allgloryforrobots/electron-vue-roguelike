import type { Meta, StoryObj } from '@storybook/vue3-vite';
import RangeSlider from './RangeSlider.vue';
import { ref } from 'vue';

const meta: Meta<typeof RangeSlider> = {
  title: 'shared/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Одиночный слайдер с поддержкой v-model и событием изменения'
      }
    }
  },
  argTypes: {
    modelValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Текущее значение слайдера',
      defaultValue: 50
    },
    label: {
      control: 'text',
      description: 'Текст метки слайдера',
      defaultValue: 'Громкость звука'
    },
    min: {
      control: 'number',
      description: 'Минимальное значение',
      defaultValue: 0
    },
    max: {
      control: 'number',
      description: 'Максимальное значение',
      defaultValue: 100
    },
    step: {
      control: 'number',
      description: 'Шаг изменения',
      defaultValue: 1
    },
    showValue: {
      control: 'boolean',
      description: 'Показывать текущее значение',
      defaultValue: true
    }
  },
  args: {
    modelValue: 50,
    label: 'Громкость звука',
    min: 0,
    max: 100,
    step: 1,
    showValue: true
  }
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => ({
    components: { RangeSlider },
    setup() {
      const volume = ref(70);
      const brightness = ref(85);
      
      const handleVolumeChange = (value: number) => {
        console.log('Громкость изменена:', value);
      };
      
      const handleBrightnessChange = (value: number) => {
        console.log('Яркость изменена:', value);
      };
      
      return { volume, brightness, handleVolumeChange, handleBrightnessChange };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 25px; width: 300px;">
        <RangeSlider
          v-model="volume"
          label="Громкость звука"
          @change="handleVolumeChange"
        />
        <RangeSlider
          v-model="brightness"
          label="Яркость экрана"
          @change="handleBrightnessChange"
        />
        <div style="background: var(--background-color-medium); padding: 15px; border-radius: 4px;">
          <p style="color: var(--text-color); margin: 0;">
            Громкость: {{ volume }}%<br>
            Яркость: {{ brightness }}%
          </p>
        </div>
      </div>
    `
  })
};

