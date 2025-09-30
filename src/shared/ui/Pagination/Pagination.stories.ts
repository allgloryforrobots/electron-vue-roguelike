import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Pagination from './Pagination.vue';

const meta: Meta<typeof Pagination> = {
  title: 'shared/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент пагинации с настраиваемым количеством страниц и callback-функцией'
      }
    }
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Текущая активная страница'
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Общее количество страниц'
    },
    showPages: {
      control: { type: 'number', min: 3, max: 9 },
      description: 'Количество отображаемых кнопок страниц'
    },
    showArrows: {
      control: 'boolean',
      description: 'Показывать кнопки навигации (вперед/назад)'
    }
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    showPages: 5,
    showArrows: true
  }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};

export const ManyPages: Story = {
  args: {
    totalPages: 20,
    currentPage: 10
  }
};

export const FewPages: Story = {
  args: {
    totalPages: 3,
    showPages: 3
  }
};

export const WithoutArrows: Story = {
  args: {
    showArrows: false
  }
};

export const CustomVisiblePages: Story = {
  args: {
    showPages: 7,
    totalPages: 15,
    currentPage: 8
  }
};

export const FirstPageActive: Story = {
  args: {
    currentPage: 1,
    totalPages: 10
  }
};

export const LastPageActive: Story = {
  args: {
    currentPage: 10,
    totalPages: 10
  }
};

// Интерактивный пример с обработчиком
export const Interactive: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const handlePageChange = (page: number) => {
        // eslint-disable-next-line no-console
        console.log('Page changed to:', page);
      };
      
      return { args, handlePageChange };
    },
    template: `
      <div>
        <Pagination 
          v-bind="args" 
          @page-change="handlePageChange" 
        />
        <p style="margin-top: 20px; text-align: center; color: var(--text-color);">
          Проверьте консоль для просмотра событий смены страницы
        </p>
      </div>
    `
  })
};

// Демонстрация различных состояний
export const AllStates: Story = {
  render: () => ({
    components: { Pagination },
    template: `
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div>
          <h3>Мало страниц (3)</h3>
          <Pagination :total-pages="3" :current-page="2" />
        </div>
        <div>
          <h3>Много страниц (20)</h3>
          <Pagination :total-pages="20" :current-page="10" />
        </div>
        <div>
          <h3>Без стрелок</h3>
          <Pagination :total-pages="8" :current-page="4" :show-arrows="false" />
        </div>
        <div>
          <h3>7 видимых страниц</h3>
          <Pagination :total-pages="15" :current-page="8" :show-pages="7" />
        </div>
      </div>
    `
  })
};