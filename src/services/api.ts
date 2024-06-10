import axios from 'axios'

const api = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,

  headers: {
    Authorization: `bearer 595806a247317ec4e2cf3594f25341778dd11ecc`,
    'X-Custom-Header': 'foobar',
    "Accept": 'application/vnd.vimeo.*+json;version=3.4',
  },





});
export default api