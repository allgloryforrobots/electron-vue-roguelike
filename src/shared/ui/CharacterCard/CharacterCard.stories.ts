import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CharacterCard from './CharacterCard.vue';

const meta: Meta<typeof CharacterCard> = {
  title: 'shared/CharacterCard',
  component: CharacterCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    character: {
      control: 'object',
      description: 'Данные персонажа',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CharacterCard>;

export const Default: Story = {
  args: {
    character: {
      name: 'Элион Изгнанник',
      level: 45,
      avatar: '⚔️',
      stats: [
        { name: 'Здоровье', value: 85, current: 425, max: 500 },
        { name: 'Мана', value: 60, current: 120, max: 200 },
        { name: 'Сила', value: 90, current: 90, max: 100 },
        { name: 'Ловкость', value: 75, current: 75, max: 100 }
      ]
    }
  }
};

export const Mage: Story = {
  args: {
    character: {
      name: 'Морвина Волшебница',
      level: 32,
      avatar: '🔮',
      stats: [
        { name: 'Здоровье', value: 60, current: 180, max: 300 },
        { name: 'Мана', value: 95, current: 285, max: 300 },
        { name: 'Интеллект', value: 98, current: 98, max: 100 },
        { name: 'Мудрость', value: 85, current: 85, max: 100 }
      ]
    }
  }
};

export const Rogue: Story = {
  args: {
    character: {
      name: 'Теневой Бродяга',
      level: 28,
      avatar: '🗡️',
      stats: [
        { name: 'Здоровье', value: 70, current: 210, max: 300 },
        { name: 'Энергия', value: 100, current: 100, max: 100 },
        { name: 'Ловкость', value: 95, current: 95, max: 100 },
        { name: 'Скрытность', value: 90, current: 90, max: 100 }
      ]
    }
  }
};

export const LowLevel: Story = {
  args: {
    character: {
      name: 'Новичок',
      level: 1,
      avatar: '🛡️',
      stats: [
        { name: 'Здоровье', value: 30, current: 30, max: 100 },
        { name: 'Мана', value: 20, current: 20, max: 100 },
        { name: 'Сила', value: 40, current: 40, max: 100 },
        { name: 'Ловкость', value: 35, current: 35, max: 100 }
      ]
    }
  }
};