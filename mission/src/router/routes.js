import ItemListPage from '@/views/ItemList.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';
import CartPage from '@/views/CartPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  },
  {
    path: '/item/:id',
    name: 'ItemPage',
    component: ItemInfoPage,
  },
];

export default routes;
