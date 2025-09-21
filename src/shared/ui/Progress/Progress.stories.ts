import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Progress from './Progress.vue';

const meta: Meta<typeof Progress> = {
  title: 'shared/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Линейный индикатор прогресса с градиентным заполнением'
      }
    }
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Значение прогресса в процентах (0-100)',
      defaultValue: 50
    }
  },
  args: {
    value: 50
  }
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    value: 0
  }
};

export const Full: Story = {
  args: {
    value: 100
  }
};

export const Quarter: Story = {
  args: {
    value: 25
  }
};

export const Half: Story = {
  args: {
    value: 50
  }
};

export const ThreeQuarters: Story = {
  args: {
    value: 75
  }
};

export const AlmostFull: Story = {
  args: {
    value: 95
  }
};

// Интерактивный пример
export const Interactive: Story = {
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 400px;">
        <Progress :value="args.value" />
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="color: var(--text-color);">Прогресс: {{ args.value }}%</span>
          <input 
            type="range" 
            min="0" 
            max="100" 
            v-model="args.value"
            style="width: 200px;"
          />
        </div>
      </div>
    `
  })
};

// Демонстрация различных состояний
export const AllStates: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 400px;">
        <div>
          <p style="margin-bottom: 5px; color: var(--text-color);">0% - Пусто</p>
          <Progress :value="0" />
        </div>
        <div>
          <p style="margin-bottom: 5px; color: var(--text-color);">25% - Четверть</p>
          <Progress :value="25" />
        </div>
        <div>
          <p style="margin-bottom: 5px; color: var(--text-color);">50% - Половина</p>
          <Progress :value="50" />
        </div>
        <div>
          <p style="margin-bottom: 5px; color: var(--text-color);">75% - Три четверти</p>
          <Progress :value="75" />
        </div>
        <div>
          <p style="margin-bottom: 5px; color: var(--text-color);">100% - Полностью</p>
          <Progress :value="100" />
        </div>
      </div>
    `
  })
};

// Пример с анимацией прогресса
export const AnimatedProgress: Story = {
  render: () => ({
    components: { Progress },
    data() {
      return {
        progress: 0
      };
    },
    mounted() {
      const interval = setInterval(() => {
        this.progress += 5;
        if (this.progress > 100) {
          this.progress = 0;
        }
      }, 200);
      
      this.$on('hook:beforeDestroy', () => {
        clearInterval(interval);
      });
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 400px;">
        <Progress :value="progress" />
        <p style="color: var(--text-color); text-align: center;">
          Автоматическое обновление: {{ progress }}%
        </p>
      </div>
    `
  })
};

// Примеры с метками
export const WithLabels: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div style="display: flex; flex-direction: column; gap: 30px; width: 400px;">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span style="color: var(--text-color); font-size: 14px;">Загрузка ресурсов</span>
            <span style="color: var(--text-color-secondary); font-size: 14px;">65%</span>
          </div>
          <Progress :value="65" />
        </div>
        
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span style="color: var(--text-color); font-size: 14px;">Прохождение квеста</span>
            <span style="color: var(--text-color-secondary); font-size: 14px;">42%</span>
          </div>
          <Progress :value="42" />
        </div>
        
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span style="color: var(--text-color); font-size: 14px;">Здоровье персонажа</span>
            <span style="color: var(--text-color-secondary); font-size: 14px;">85%</span>
          </div>
          <Progress :value="85" />
        </div>
      </div>
    `
  })
};