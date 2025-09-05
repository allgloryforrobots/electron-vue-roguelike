import { createRouter, createWebHashHistory } from 'vue-router';

import { WelcomePage } from '@/pages/WelcomePage';
import { ExamplesPage } from '@/pages/ExamplesPage';
import { MainMenuPage } from '@/pages/MainMenuPage';
import GamePage from '@/pages/GamePage/ui/GamePage.vue';
import { InventoryPage } from '@/pages/InventoryPage';
import { CharacterStatsPage } from '@/pages/CharacterStatsPage';

import LayoutWithNavbar from '../ui/LayoutWithNavbar.vue'

export const ROUTES = {
  WELCOME: '/welcome',
  EXAMPLES: '/examples',
  MAIN_MENU: '/',
  GRID: '/grid',
  INVENTORY: '/inventory',
  CHARACTER: '/character',
  MAP: '/map',
  REPUTATION: '/reputation',
  NOTES: '/notes',
  EVIDENCE: '/evidence',
  TIPS: '/tips',
  DISARM_TRAPS: '/disarm_traps'
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
      component: LayoutWithNavbar,
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
          name: 'inventory',
          component: InventoryPage,
        },
        {
          path: ROUTES.CHARACTER,
          name: 'character',
          component: CharacterStatsPage,
        },
      ]
    },
  ],
})

export default router;