import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Modal from './Modal.vue';
import DDButton from '../DDButton/DDbutton.vue';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Модальное окно с именованными слотами для кастомизации контента'
      }
    }
  },
  argTypes: {
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;


export const Default: Story = {
  render: () => ({
    components: { Modal, DDButton },
    template: `
      <Modal>
        <template #header>
          <h3>Модальное окно</h3>
        </template>
        
        <template #body>
          <div style="text-align: center;">
            <p>Кнопки по умолчанию</p>
          </div>
        </template>
      </Modal>
    `
  })
};

export const CustomBtns: Story = {
  render: () => ({
    components: { Modal, DDButton },
    template: `
      <Modal>
        <template #header>
          <h3>Внимание!</h3>
        </template>
        
        <template #body>
          <div style="text-align: center;">
            <p>Это кастомный контент модального окна с дополнительной информацией</p>
          </div>
        </template>
        
        <template #footer>
          <DDButton>Нет</DDButton>
          <DDButton>Да</DDButton>
          <DDButton>Позже</DDButton>
        </template>
      </Modal>
    `
  })
};