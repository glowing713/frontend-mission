import ItemListPage from '@/views/ItemList.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';
import CartPage from '@/views/CartPage.vue';
import CartOrder from '@/views/CartOrder.vue';
import OrderComplete from '@/views/OrderComplete.vue';

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
    path: '/order',
    name: 'CartOrder',
    component: CartOrder,
  },
  {
    path: '/odrcomplete',
    name: 'OrderComplete',
    component: OrderComplete,
  },
  {
    path: '/item/:id',
    name: 'ItemPage',
    component: ItemInfoPage,
  },
];

export default routes;
