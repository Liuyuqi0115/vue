import axios from 'axios'
const httpRequ = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 200000,
  headers: {
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.0.4","e":"16197048775574974924390401","bc":"310100"}'
  }
})
export default httpRequ
