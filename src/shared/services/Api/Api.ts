import axios, { AxiosInstance } from 'axios'
import config from 'config'
import { authenticate, handleError, handleResponse } from './Api.utils'

const Api: AxiosInstance = axios.create({
  baseURL: config.apiUrl,
})

Api.interceptors.request.use(
  async config => {
    config!.headers!.Accept = '*/*'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

Api.interceptors.request.use(authenticate)
Api.interceptors.response.use(handleResponse, handleError)

export default Api
