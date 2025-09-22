import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Tabs from './Tabs.vue';
import { ref } from 'vue';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Массив названий вкладок'
    },
    modelValue: {
      control: 'text',
      description: 'Активная вкладка (v-model)'
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Базовая история
export const Default: Story = {
  render: (args) => ({
    components: { Tabs },
    setup() {
      const activeTab = ref('Вкладка 1');
      return { args, activeTab };
    },
    template: `
      <div style="width: 600px;">
        <Tabs
          v-bind="args"
          v-model="activeTab"
        />
        <div style="padding: 20px; border: 1px solid var(--border-color); border-top: none; background: var(--background-color-medium);">
          <p>Содержимое активной вкладки: <strong>{{ activeTab }}</strong></p>
          <div v-if="activeTab === 'Вкладка 1'">
            <h3>Контент первой вкладки</h3>
            <p>Это содержимое первой вкладки</p>
          </div>
          <div v-else-if="activeTab === 'Вкладка 2'">
            <h3>Контент второй вкладки</h3>
            <p>Это содержимое второй вкладки</p>
          </div>
          <div v-else-if="activeTab === 'Вкладка 3'">
            <h3>Контент третьей вкладки</h3>
            <p>Это содержимое третьей вкладки</p>
          </div>
        </div>
      </div>
    `,
  }),
  args: {
    tabs: ['Вкладка 1', 'Вкладка 2', 'Вкладка 3'],
  },
};