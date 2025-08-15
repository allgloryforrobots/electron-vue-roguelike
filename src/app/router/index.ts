import { createRouter, createWebHashHistory } from 'vue-router';
import { WelcomePage } from '@/pages/WelcomePage';
import { ExamplesPage } from '@/pages/ExamplesPage';

export const ROUTES = {
  WELCOME: '/welcome',
  EXAMPLES: '/examples',
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: ROUTES.WELCOME,
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
  ],
})

export default router
