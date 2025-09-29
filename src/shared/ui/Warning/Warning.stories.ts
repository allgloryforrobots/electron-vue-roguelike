import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Warning from './Warning.vue';

const meta = {
  title: 'shared/Warning',
  component: Warning,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок предупреждения'
    },
    content: {
      control: 'text',
      description: 'Текст предупреждения'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Компонент для отображения предупреждающих сообщений с иконкой'
      }
    }
  }
} satisfies Meta<typeof Warning>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовая история
export const Default: Story = {
  args: {
    title: 'Внимание!',
    content: 'Это стандартное предупреждение о важной информации.'
  }
};

// Предупреждение с длинным текстом
export const LongText: Story = {
  args: {
    title: 'Важное уведомление',
    content: 'Это предупреждение содержит более длинный текст, который может занимать несколько строк. Он демонстрирует, как компонент ведет себя с контентом разного объема и как происходит перенос текста внутри блока.'
  }
};

// Предупреждение с HTML контентом
export const WithHTMLContent: Story = {
  args: {
    title: 'Безопасность',
    content: 'Пожалуйста, соблюдайте меры предосторожности. <strong>Важные моменты</strong> могут быть выделены. Также можно использовать <a href="#">ссылки</a> при необходимости.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент поддерживает HTML разметку в контенте'
      }
    }
  }
};

// Предупреждение без заголовка
export const WithoutTitle: Story = {
  args: {
    title: '',
    content: 'Это предупреждение без заголовка, только с текстовым содержимым.'
  }
};

// Различные типы предупреждений
export const CriticalWarning: Story = {
  args: {
    title: 'Критическое предупреждение!',
    content: 'Это сообщение о критической ситуации, требующей немедленного внимания.'
  }
};

export const InfoWarning: Story = {
  args: {
    title: 'Полезная информация',
    content: 'Это информационное сообщение, которое поможет вам в работе с системой.'
  }
};