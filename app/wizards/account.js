import { wizard } from 'govuk-prototype-rig'
import { userMatchesDQTRecord } from '../utils/dqt.js'

function emailHasAccount (data) {
  return data.hasAccount
}

export default (req) => {
  const data = req.session.data
  const trnRequired = data.features.trnRequired.on
  const hasTrn = (data.account && data.account['do-you-have-a-trn'] === 'Yes') || trnRequired
  const noMatchJourney = data.features.noMatchJourney.on

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
      '/account/check-answers': () => userMatchesDQTRecord(data)
    },
    '/account/have-nino': {
      '/account/trn-known': () => trnRequired && data['have-nino'] === 'No',
      '/account/have-qts': { data: 'have-nino', value: 'No' }
    },
    '/account/nino': {
      '/account/check-answers': () => userMatchesDQTRecord(data)
    },
    ...trnRequired
      ? { '/account/trn-known': {} }
      : {},
    '/account/have-qts': {
      '/account/check-answers': { data: 'has-qts', value: 'No' }
    },
    '/account/how-qts': {},
    '/account/check-answers': {},
    ...(hasTrn && noMatchJourney)
      ? {
        '/account/no-match': {
          '/account/check-answers': { data: 'account.try-again', value: 'yes' }
        }
      }
      : {},
    '/account/finish': {},
    '/account/return-to-service': {}
  }

  return wizard(journey, req)
}
