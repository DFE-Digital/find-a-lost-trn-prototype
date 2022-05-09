import { wizard } from 'govuk-prototype-rig'
import { userMatchesDQTRecord } from '../utils/dqt.js'

export default (req) => {
  const data = req.session.data
  const journey = {
    '/start': {},
    '/trn-holder': {
      '/you-dont-have-a-trn': { data: 'do-you-have-a-trn', value: 'No' }
    },
    '/ask-questions': {},
    ...data.features.apiUnavailable.on && { '/longer-than-normal': {} },
    '/email': {},
    '/name': {},
    '/dob': {
      '/sms': () => userMatchesDQTRecord(data) || data.emailMatchJourney
    },
    '/have-nino': {
      '/sms': () => data['have-nino'] === 'No' && userMatchesDQTRecord(data),
      '/have-qts': { data: 'have-nino', value: 'No' }
    },
    '/nino': {
      '/sms': () => userMatchesDQTRecord(data)
    },
    '/have-qts': {
      '/sms': { data: 'has-qts', value: 'No' }
    },
    '/how-qts': {},
    '/sms': {},
    '/check-answers': {
      '/trn-sent': () => userMatchesDQTRecord(data) || data.successfulJourney,
      '/helpdesk-request-submitted': () => data.features.apiUnavailable.on
    },
    '/no-match': {
      '/check-answers': { data: 'try-again', value: 'yes' }
    },
    '/helpdesk-request-submitted': {},
    '/': {}
  }

  return wizard(journey, req)
}
