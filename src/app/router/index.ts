import { createRouter, createWebHashHistory } from 'vue-router';
import { WelcomePage } from '@/pages/WelcomePage';
import { ExamplesPage } from '@/pages/ExamplesPage';
import { MainMenuPage } from '@/pages/MainMenuPage';
import GamePage from '@/pages/GamePage/ui/GamePage.vue';
import { InventoryPage } from '@/pages/InventoryPage';
import LayoutWithNavbar from '../ui/LayoutWithNavbar.vue'

export const ROUTES = {
  WELCOME: '/welcome',
  EXAMPLES: '/examples',
  MAIN_MENU: '/',
  GRID: '/grid',
  INVENTORY: '/inventory'
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: ROUTES.MAIN_MENU,
      name: 'main_menu',
      component: MainMenuPage,
    },
    {
      path: ROUTES.WELCOME,
      name: 'welcome',
      component: WelcomePage,
    },
    // Layout с navbar для этих страниц
    {
      path: '/',
      component: LayoutWithNavbar, // Основной layout
      children: [
        {
          path: ROUTES.EXAMPLES,
          name: 'examples',
          component: ExamplesPage,
        },
        {
          path: ROUTES.GRID,
          name: 'grid',
          component: GamePage,
        },
        {
          path: ROUTES.INVENTORY,
          name: 'inventory', // Исправил имя (было дублирование 'grid')
          component: InventoryPage,
        },
      ]
    },
  ],
})

export default router;