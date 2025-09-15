import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ContextMenu from './ContextMenu.vue'; 

const items = [
    { label: 'Использовать', icon: 'fas fa-potion', action: () => {} },
    { label: 'Осмотреть', icon: 'fas fa-search', action: () =>  {} },
    { label: 'Передать', icon: 'fas fa-handshake', action: () =>  {} },
    { separator: true },
    { label: 'Выбросить', icon: 'fas fa-trash', danger: true, action: () =>  {} },
    { label: 'Разобрать', icon: 'fas fa-hammer', danger: true, action: () =>  {} }
]

const meta: Meta<typeof ContextMenu> = {
  title: 'shared/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
    argTypes: {
        items
    },
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Common: Story = {
  args: {
  },
  render: (args) => ({
    components: { ContextMenu },
    setup() { return { args }; },
    template: `
        <ContextMenu
            :title="'Действия с предметом'"
            :headerIcon="'fas fa-ring'"
            :items="contextItems"
            @item-selected="() => {}"
        >
            <template #activator>
            <div class="context-demo-content">
                <i class="fas fa-gem"></i>
                <h3>Драконий самоцвет</h3>
                <p>Щелкните правой кнопкой мыши для действий с предметом</p>
            </div>
            </template>
        </ContextMenu>
    `
  })
};