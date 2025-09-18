import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Tooltip from './Tooltip.vue';

const meta: Meta<typeof Tooltip> = {
  title: 'shared/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    tooltip: {
      control: 'object',
      description: 'Объект с текстом тултипа'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    tooltip: {
      text: 'Это стандартный тултип с текстом подсказки'
    }
  },
  render: (args) => ({
    components: { Tooltip },
    setup() { return { args }; },
    template: `
      <Tooltip v-bind="args">
        <span style="border-bottom: 1px dashed var(--accent-color-6); cursor: help;">
          Наведи на меня
        </span>
      </Tooltip>
    `
  })
};

export const LongText: Story = {
  args: {
    tooltip: {
      text: 'Очень длинный текст тултипа, который занимает несколько строк и демонстрирует, как компонент обрабатывает большой объем информации. Тултип автоматически переносит текст и подстраивается под размеры.'
    }
  },
  render: (args) => ({
    components: { Tooltip },
    setup() { return { args }; },
    template: `
      <Tooltip v-bind="args">
        <button style="padding: 8px 16px; background: var(--accent-color-8); border: 1px solid var(--border-color);">
          Кнопка с длинным тултипом
        </button>
      </Tooltip>
    `
  })
};

export const CornerPositions: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup() { return { args }; },
    template: `
      <div style="display: flex; flex-direction: column; gap: 50px; align-items: center; padding: 50px;">
        <Tooltip :tooltip="{ text: 'Тултип справа' }">
            <span style="border: 1px solid var(--border-color); padding: 10px;">Справа</span>
        </Tooltip>
      </div>

      <div style="display: flex; flex-direction: column; gap: 50px; align-items: center; padding: 50px; position: fixed; right:0;">
        <Tooltip :tooltip="{ text: 'Тултип слева' }">
            <span style="border: 1px solid var(--border-color); padding: 10px;">Слева</span>
        </Tooltip>
      </div>

      <div style="display: flex; flex-direction: column; gap: 50px; align-items: center; padding: 50px; position: fixed; right:0; bottom: 0;">
        <Tooltip :tooltip="{ text: 'Тултип слева' }">
            <span style="border: 1px solid var(--border-color); padding: 10px;">Слева</span>
        </Tooltip>
      </div>
    `
  })
};