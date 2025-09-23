import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Toggle from './Toggle.vue';
import { ref } from 'vue';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    toggles: {
      control: 'object',
      description: 'Массив объектов переключателей'
    }
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
  args: {
    toggles: [
      { label: 'Звуковые эффекты', checked: true },
      { label: 'Фоновная музыка', checked: true },
      { label: 'Режим сложности', checked: false }
    ]
  },
  render: (args) => ({
    components: { Toggle },
    setup() {
      const localToggles = ref([...args.toggles]);
      
      const handleToggleChange = (event: { index: number; value: boolean }) => {
        localToggles.value[event.index].checked = event.value;
      };

      return { args, localToggles, handleToggleChange };
    },
    template: `
      <Toggle 
        :toggles="localToggles" 
        @toggle-change="handleToggleChange" 
      />
    `
  })
};

export const SingleToggle: Story = {
  args: {
    toggles: [
      { label: 'Только один переключатель', checked: false }
    ]
  },
  render: (args) => ({
    components: { Toggle },
    setup() {
      const localToggles = ref([...args.toggles]);
      
      const handleToggleChange = (event: { index: number; value: boolean }) => {
        localToggles.value[event.index].checked = event.value;
      };

      return { args, localToggles, handleToggleChange };
    },
    template: `
      <Toggle 
        :toggles="localToggles" 
        @toggle-change="handleToggleChange" 
      />
    `
  })
};
