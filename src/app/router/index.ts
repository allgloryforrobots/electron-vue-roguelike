import { createRouter, createWebHashHistory } from 'vue-router';
import { WelcomePage } from '@/pages/WelcomePage';
import { ExamplesPage } from '@/pages/ExamplesPage';
import { MainMenuPage } from '@/pages/MainMenuPage';
import GridPage from '@/pages/GridPage/ui/GridPage.vue';

export const ROUTES = {
  WELCOME: '/welcome',
  EXAMPLES: '/examples',
  MAIN_MENU: '/',
  GRID: '/grid'
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
    {
      path: ROUTES.EXAMPLES,
      name: 'examples',
      component: ExamplesPage,
    },
    {
      path: ROUTES.GRID,
      name: 'grid',
      component: GridPage,
    },
  ],
})

export default router
