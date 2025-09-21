import type { Meta, StoryObj } from '@storybook/vue3-vite';
import DDCard from './DDCard.vue';

const meta: Meta<typeof DDCard> = {
  title: 'shared/DDCard',
  component: DDCard,
  tags: ['autodocs'],
  argTypes: {
    // Базовые пропсы если будут добавлены позже
  }
};

export default meta;

type Story = StoryObj<typeof DDCard>;

export const Default: Story = {
  render: () => ({
    components: { DDCard },
    template: `
      <DDCard>
        <h4>Заголовок карточки</h4>
        <p>Содержимое карточки с описанием или другой информацией.</p>
      </DDCard>
    `
  })
};

export const Outlined: Story = {
  render: () => ({
    components: { DDCard },
    template: `
      <DDCard type="outlined">
        <h4>Заголовок карточки</h4>
        <p>Содержимое карточки с описанием или другой информацией.</p>
      </DDCard>
    `
  })
};

export const MultipleDDCards: Story = {
  render: () => ({
    components: { DDCard },
    template: `
      <div style="display: flex; gap: 15px; flex-wrap: wrap;">
        <DDCard>
          <h4>Карточка 1</h4>
          <p>Первая карточка с содержимым</p>
        </DDCard>
        <DDCard>
          <h4>Карточка 2</h4>
          <p>Вторая карточка с другим содержимым</p>
        </DDCard>
        <DDCard>
          <h4>Карточка 3</h4>
          <p>Третья карточка с дополнительной информацией</p>
        </DDCard>
      </div>
    `
  })
};

export const CustomStyles: Story = {
  render: () => ({
    components: { DDCard },
    template: `
      <div>
        <DDCard style="max-width: 300px; background: linear-gradient(145deg, rgba(65, 105, 225, 0.7), rgba(25, 25, 112, 0.9));">
          <h4 style="color: #fff;">Синяя карточка</h4>
          <p style="color: #e0e0e0;">Карточка с кастомным градиентом</p>
        </DDCard>
      </div>
    `
  })
};