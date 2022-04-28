import { wizard } from 'govuk-prototype-rig'
import { userMatchesDQTRecord } from '../utils/dqt.js'

function emailHasAccount (data) {
  return data.hasAccount
}

export default (req) => {
  const data = req.session.data
  const hasTrn = data.account && data.account['do-you-have-a-trn'] === 'Yes'

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
      ...hasTrn
        ? { '/account/have-qts': { data: 'have-nino', value: 'No' } }
        : { '/account/create-account': { data: 'have-nino', value: 'No' } }
    },
    '/account/nino': {
      '/account/create-account': () => userMatchesDQTRecord(data)
    },
    // Only include QTS questions if user has a TRN
    ...hasTrn
      ? {
          '/account/have-qts': {
            '/account/create-account': { data: 'has-qts', value: 'No' }
          },
          '/account/how-qts': {}
        }
      : {},
    '/account/create-account': {},
    '/account/check-answers': {},
    '/account/finish': {},
    '/account/return-to-service': {}
  }

  return wizard(journey, req)
}
