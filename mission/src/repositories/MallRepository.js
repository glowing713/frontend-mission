import Client from '@/repositories/Clients/AxiosClient';

export default {
  join(payload) {
    return Client.post('/join', payload);
  },
  login(payload) {
    return Client.post('/login', payload);
  },
  getItems() {
    return Client.get('/item');
  },
  getItemInfo(id) {
    return Client.get(`/item/${id}`);
  },
  getWishList() {
    return Client.get('/wish');
  },
  addWish(payload) {
    return Client.post('/wish', payload);
  },
  getUserInfo() {
    return Client.get('/info');
  },
  updateUserInfo(payload) {
    return Client.put('/info', payload);
  },
  getCartList() {
    return Client.get('/cart');
  },
  addToCart(payload) {
    return Client.post('/cart', payload);
  },
};
