import { wizard } from 'govuk-prototype-rig'
import { userMatchesDQTRecord } from '../utils/dqt.js'

const hasUserMatchedRecord = (data) => {
  return userMatchesDQTRecord(data) || data.emailMatchJourney
}

export default (req) => {
  const data = req.session.data
  const successfulMatch = hasUserMatchedRecord(data)

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
      '/sms': () => data.features.sms.on && successfulMatch,
      '/check-answers': () => successfulMatch
    },
    '/have-nino': {
      '/have-qts': { data: 'have-nino', value: 'No' }
    },
    '/nino': {
      '/sms': () => data.features.sms.on && successfulMatch,
      '/check-answers': () => successfulMatch
    },
    '/have-qts': {
      '/sms': () => data.features.sms.on && data['has-qts'] === 'No',
      '/check-answers': { data: 'has-qts', value: 'No' }
    },
    '/how-qts': {},
    ...data.features.sms.on && { '/sms': {} },
    '/check-answers': {
      '/trn-sent': () => successfulMatch || data.successfulJourney,
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
