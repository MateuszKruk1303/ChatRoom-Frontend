import { AxiosRequestConfig } from 'axios'
import Auth from '../Auth'

export const authenticate = async (config: AxiosRequestConfig) => {
  if (config.withCredentials !== false) {
    const token = Auth.getTokensInfo().accessToken
    if (!config.headers) config.headers = {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}
