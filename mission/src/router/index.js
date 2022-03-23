import { createRouter, createWebHistory } from 'vue-router';
import routes from './RoutesObj';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
