import axios from 'axios';

const baseURL = 'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0';

export default axios.create({
  baseURL,
  headers: {
    Authorization: 'abcd1234',
  },
});
