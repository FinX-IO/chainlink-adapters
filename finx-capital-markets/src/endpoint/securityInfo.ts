import { Requester, Validator } from '@chainlink/external-adapter'
import { ExecuteWithConfig, Config } from '@chainlink/types'

export const NAME = 'security-info'

const customParams = {
  // matchId: true,
  securityId: true,
}

export const execute: ExecuteWithConfig<Config> = async (request, config) => {
  const validator = new Validator(request, customParams)
  if (validator.error) throw validator.error

  const jobRunID = validator.validated.id
  // const matchId = validator.validated.data.matchId
  const securityId = validator.validated.data.securityId
  const url = `events/${securityId}`
  // const url = `events/${matchId}`

  const reqConfig = {
    ...config.api,
    headers: {
      ...config.api.headers,
      'x-rapidapi-key': config.apiKey,
    },
    params: {
      // include: 'scores',
      include: 'securityData',
    },
    url,
  }

  const response = await Requester.request(reqConfig)

  // if (response.data.score.event_status !== 'STATUS_FINAL') {
  //   return Requester.errored(jobRunID, 'Match status is not final')
  // }

  if (response.data.security.event_status !== 'AVAILABLE') {
    return Requester.errored(jobRunID, 'Security is not available')
  }

  // const result = parseInt(response.data.score.score_away) + parseInt(response.data.score.score_home)
  const result = response.data.security.security_data

  return Requester.success(jobRunID, {
    data: config.verbose ? { ...response.data, result } : { result },
    result,
    status: 200,
  })
}
