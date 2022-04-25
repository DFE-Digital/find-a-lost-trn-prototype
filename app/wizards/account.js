import { wizard } from 'govuk-prototype-rig'
import { userMatchesDQTRecord } from '../utils/dqt.js'

function emailHasAccount (data) {
  return data.hasAccount
}

export default (req) => {
  const data = req.session.data
  const journey = {
    '/account/email': {},
    '/account/email-confirmation': {
      '/account/ask-questions': () => !emailHasAccount(data)
    },
    '/account/signed-in-as': {
      '/account/return-to-service': () => true
    },
    '/account/ask-questions': {},
    '/account/trn-holder': {
      '/account/name': { data: 'account.do-you-have-a-trn', value: 'No' }
    },
    '/account/trn-known': {
      '/account/name': { data: 'account.do-you-know-your-trn', value: 'no' }
    },
    '/account/trn': {},
    '/account/name': {},
    '/account/dob': {
      '/account/create-account': () => userMatchesDQTRecord(data)
    },
    '/account/have-nino': {
      '/account/have-qts': { data: 'have-nino', value: 'No' }
    },
    '/account/nino': {
      '/account/create-account': () => userMatchesDQTRecord(data)
    },
    '/account/have-qts': {
      '/account/create-account': { data: 'has-qts', value: 'No' }
    },
    '/account/how-qts': {
      '/account/no-match': () => !userMatchesDQTRecord(data) && data.scenario !== '1'
    },
    '/account/create-account': {},
    '/account/match': {},
    '/account/return-to-service': {}
  }

  return wizard(journey, req)
}
