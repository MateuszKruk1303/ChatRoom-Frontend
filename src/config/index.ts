export { default as env } from './env'
export { default as theme } from './theme'
export { default as paths } from './paths'

const throwError = (message: string) => {
  throw new Error(message)
}

const config = {
  accessTokenKey: 'token',
  apiUrl:
    process.env.REACT_APP_API_URL ||
    throwError('Missing API_URL env variable.'),
}

export default config
