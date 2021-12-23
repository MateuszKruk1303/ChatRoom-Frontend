import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import Auth from '../Auth'

export const authenticate = async (config: AxiosRequestConfig) => {
  if (config.withCredentials !== false) {
    const token = Auth.getTokensInfo().accessToken
    if (!config.headers) config.headers = {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

export const handleResponse = async (response: AxiosResponse) => {
  return Promise.resolve(response)
}

export const handleError = async (error: AxiosError) => {
  return Promise.reject(JSON.parse(error.request.response).message)
}
