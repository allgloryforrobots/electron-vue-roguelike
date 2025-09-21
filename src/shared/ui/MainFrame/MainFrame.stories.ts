import type { Meta, StoryObj } from '@storybook/vue3-vite';
import MainFrame from './MainFrame.vue';

const MockHeader = {
  template: '<h1>Заголовок хедера</h1><p>Текст хедеоа</p>'
};

const MockFooter = {
  template: "<p>Текст футера</p>"
};

const meta: Meta<typeof MainFrame> = {
  title: 'shared/MainFrame',
  component: MainFrame,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Основной контейнер с хедером и футером для главного контента'
      }
    }
  },
  decorators: [
    () => ({
      components: { MainFrameHeader: MockHeader, MainFrameFooter: MockFooter },
      template: '<story />'
    })
  ]
};

export default meta;
type Story = StoryObj<typeof MainFrame>;

export const Default: Story = {
  render: (args) => ({
    components: { MainFrame },
    setup() {
      return { args };
    },
    template: `
      <MainFrame v-bind="args">
        <template #header>
          <h1>Кастомный заголовок</h1>
        </template>

        <div style="padding: 60px 30px; text-align: center;">
          <h2>Контент с большим количеством текста</h2>
          <p>Это демонстрация того, как контейнер обрабатывает контент различной длины. Контейнер автоматически адаптируется под содержимое, обеспечивая consistent padding и отступы.</p>
          <p>Даже при большом количестве контента, хедер и футер остаются на своих местах, обеспечивая структуру и навигацию.</p>
        </div>

        <template #footer>
          <p>Кастомный футер © 2024</p>
        </template>
      </MainFrame>
    `
  })
};