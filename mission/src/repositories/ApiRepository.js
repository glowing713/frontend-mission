import AxiosClient from '@/repositories/Clients/AxiosClient';

export default class MallRepository {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new AxiosClient().instance;
  }

  async join(payload) {
    const result = await this.clientInstance.post('/join', payload);
    return result;
  }

  async login(payload) {
    const result = await this.clientInstance.post('/login', payload);
    return result;
  }

  async getItems() {
    const result = await this.clientInstance.get('/item');
    return result;
  }

  async getItemInfo(id) {
    const result = await this.clientInstance.get(`/item/${id}`);
    return result;
  }

  async getWishList() {
    const result = await this.clientInstance.get('/wish');
    return result;
  }

  async addWish(payload) {
    const result = await this.clientInstance.post('/wish', payload);
    return result;
  }

  async getUserInfo() {
    const result = await this.clientInstance.get('/info');
    return result;
  }

  async updateUserInfo(payload) {
    const result = await this.clientInstance.put('/info', payload);
    return result;
  }

  async getCartList() {
    const result = await this.clientInstance.get('/cart');
    return result;
  }

  async addToCart(payload) {
    const result = await this.clientInstance.post('/cart', payload);
    return result;
  }
}
