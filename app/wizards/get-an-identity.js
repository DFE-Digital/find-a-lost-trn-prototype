import { wizard } from 'govuk-prototype-rig'
import { userMatchesDQTRecord } from '../utils/dqt.js'

function emailHasIdentity (data) {
  return data.hasIdentity || data['email-address'] === 'existing.user@example.com'
}

export default (req) => {
  const data = req.session.data
  const trnRequired = data.features.trnRequired.on
  const hasTrn = (data.identity && data.identity['do-you-have-a-trn'] === 'Yes') || trnRequired
  const noMatchJourney = data.features.noMatchJourney.on
  const replacingEmail = data.features.replacingEmail.on

  const journey = {
    '/get-an-identity/email': {},
    '/get-an-identity/email-confirmation': {
      '/get-an-identity/ask-questions': () => !emailHasIdentity(data)
    },
    '/get-an-identity/signed-in-as': {
      '/get-an-identity/edit-details': {}
    },
    '/get-an-identity/edit-details': {},
    '/get-an-identity/ask-questions': {},
    ...!trnRequired
      ? {
        '/get-an-identity/trn-holder': {
          '/get-an-identity/official-name': { data: 'identity.do-you-have-a-trn', value: 'No' }
        },
        '/get-an-identity/trn-known': {
          '/get-an-identity/official-name': { data: 'identity.do-you-know-your-trn', value: 'no' }
        }
      }
      : {},
    '/get-an-identity/official-name': {},
    '/get-an-identity/preferred-name': {},
    '/get-an-identity/dob': {
      '/get-an-identity/check-answers': () => userMatchesDQTRecord(data)
    },
    '/get-an-identity/have-nino': {
      '/get-an-identity/trn-known': () => trnRequired && data['have-nino'] === 'No',
      '/get-an-identity/have-qts': { data: 'have-nino', value: 'No' }
    },
    '/get-an-identity/nino': {
      '/get-an-identity/check-answers': () => userMatchesDQTRecord(data)
    },
    ...trnRequired
      ? { '/get-an-identity/trn-known': {} }
      : {},
    '/get-an-identity/have-qts': {
      '/get-an-identity/check-answers': { data: 'has-qts', value: 'No' }
    },
    '/get-an-identity/how-qts': {},
    '/get-an-identity/check-answers': {},
    ...(hasTrn && noMatchJourney)
      ? {
        '/get-an-identity/no-match': {
          '/get-an-identity/check-answers': { data: 'identity.try-again', value: 'yes' }
        }
      }
      : {},
    ...(replacingEmail)
      ? {
        '/get-an-identity/different-email': {},
        '/get-an-identity/replace-email': {}
      }
      : {},
    '/get-an-identity/finish': {},
    '/get-an-identity/return-to-service': {}
  }

  return wizard(journey, req)
}
