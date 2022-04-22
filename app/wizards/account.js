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
      '/account/match': () => userMatchesDQTRecord(data)
    },
    '/account/have-nino': {
      '/account/have-qts': { data: 'have-nino', value: 'No' }
    },
    '/account/nino': {
      '/account/match': () => userMatchesDQTRecord(data)
    },
    '/account/have-qts': {
      '/account/match': { data: 'has-qts', value: 'No' }
    },
    '/account/how-qts': {
      '/account/no-match': () => !userMatchesDQTRecord(data) && data.scenario !== '1'
    },
    '/account/match': {},
    '/account/create-account': {
      '/account/return-to-service': { data: 'create-account', value: 'No' }
    },
    '/account/return-to-service': {}
  }

  return wizard(journey, req)
}
