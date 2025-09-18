import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ContextMenu from './ContextMenu.vue'; 

const items = [
    { label: 'Использовать', icon: 'fa-duotone fa-solid fa-potion', action: () => {} },
    { label: 'Осмотреть', icon: 'fa-duotone fa-solid fa-search', action: () =>  {} },
    { label: 'Передать', icon: 'fa-duotone fa-solid fa-handshake', action: () =>  {} },
    { separator: true },
    { label: 'Выбросить', icon: 'fa-duotone fa-solid fa-trash', danger: true, action: () =>  {} },
    { label: 'Разобрать', icon: 'fa-duotone fa-solid fa-hammer', danger: true, action: () =>  {} }
]

const meta: Meta<typeof ContextMenu> = {
  title: 'shared/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Common: Story = {
  args: {
    items: items,
    title: 'Действия с предметом',
    headerIcon: 'fa-duotone fa-solid fa-ring'
  },
  render: (args) => ({
    components: { ContextMenu },
    setup() { return { args }; },
    template: `
         <ContextMenu
            :title="args.title"
            :headerIcon="args.headerIcon"
            :items="args.items"
            @item-selected="() => {}"
        >
            <template #activator>
            <div class="context-demo-content">
                <i class="fa-duotone fa-solid fa-gem"></i>
                <h3>Драконий самоцвет</h3>
                <p>Щелкните правой кнопкой мыши для действий с предметом</p>
            </div>
            </template>
        </ContextMenu>
    `
  })
};