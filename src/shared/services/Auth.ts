import config from 'config'

class Auth {
  static setTokensInfo({ accessToken }: { accessToken: string }) {
    localStorage.setItem(config.accessTokenKey, accessToken)
  }

  static getTokensInfo() {
    return {
      accessToken: localStorage.getItem(config.accessTokenKey),
    }
  }

  static removeTokens() {
    localStorage.removeItem(config.accessTokenKey)
  }
}

export default Auth
