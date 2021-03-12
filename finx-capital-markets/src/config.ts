import { Requester } from '@chainlink/external-adapter'
import { Config } from '@chainlink/types'

export const DEFAULT_ENDPOINT = 'security-info'
export const DEFAULT_BASE_URL = 'https://api.finx.io/'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix, true)
  config.api = {
    ...config.api,
    baseURL: config.api.baseURL || DEFAULT_BASE_URL,
    headers: {
      ...config.api.headers,
      'x-host': 'api.finx.io',
    },
  }
  return config
}
