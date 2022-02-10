import axios from 'axios';

// export default axios.create({
//   baseURL,
//   headers: {
//     Authorization: 'abcd1234',
//   },
// });

export default class AxiosClient {
  constructor() {
    const baseURL = 'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0';
    const apiKey = 'abcd1234';

    this.instance = axios.create({
      baseURL,
      headers: {
        Authorization: apiKey,
      },
    });
  }
}
