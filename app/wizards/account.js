import { wizard } from 'govuk-prototype-rig'
import { userMatchesDQTRecord } from '../utils/dqt.js'

function emailHasAccount (data) {
  return data.hasAccount
}

export default (req) => {
  const data = req.session.data
  const trnRequired = data.features.trnRequired.on
  const hasTrn = (data.account && data.account['do-you-have-a-trn'] === 'Yes') || trnRequired

  const journey = {
    '/account/email': {},
    '/account/email-confirmation': {
      '/account/ask-questions': () => !emailHasAccount(data)
    },
    '/account/signed-in-as': {
      '/account/return-to-service': true
    },
    '/account/ask-questions': {},
    ...!trnRequired
      ? {
        '/account/trn-holder': {
          '/account/official-name': { data: 'account.do-you-have-a-trn', value: 'No' }
        },
        '/account/trn-known': {
          '/account/official-name': { data: 'account.do-you-know-your-trn', value: 'no' }
        }
      }
      : {},
    '/account/official-name': {},
    '/account/dob': {
      '/account/next-time': () => userMatchesDQTRecord(data)
    },
    '/account/have-nino': {
      '/account/trn-known': () => trnRequired && data['have-nino'] === 'No',
      '/account/have-qts': () => hasTrn && data['have-nino'] === 'No',
      '/account/next-time': { data: 'have-nino', value: 'No' }
    },
    '/account/nino': {
      '/account/next-time': () => userMatchesDQTRecord(data)
    },
    ...trnRequired
      ? { '/account/trn-known': {} }
      : {},

    // Only include QTS questions if user has a TRN
    ...hasTrn
      ? {
        '/account/have-qts': {
          '/account/next-time': { data: 'has-qts', value: 'No' }
        },
        '/account/how-qts': {}
      }
      : {},
    '/account/next-time': {
      '/account/change-email': { data: 'account.next-time', value: 'different' }
    },
    '/account/check-answers': {},
    '/account/finish': {},
    '/account/return-to-service': {},

    // Change email account flow
    '/account/change-email': {},
    '/account/change-email-confirmation': {},
    '/account/change-email-next-time-confirmation': {
      '/account/check-answers': true
    }
  }

  return wizard(journey, req)
}
