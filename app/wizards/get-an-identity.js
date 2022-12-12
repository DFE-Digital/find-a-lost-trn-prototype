import { wizard } from 'govuk-prototype-rig'
import { userMatchesDQTRecord } from '../utils/dqt.js'

function emailHasIdentity (data) {
  return data.hasIdentity || data['email-address'] === 'existing.user@example.com'
}

export default (req) => {
  const data = req.session.data
  const noMatchJourney = data.features.noMatchJourney.on
  const replacingEmail = data.features.replacingEmail.on
  const newAuth = data.features.newAuth.on

  const journey = {
    ...(newAuth)
    ? {
      '/get-an-identity/start': {},
      '/get-an-identity/account': {}
    }
    : {},
    '/get-an-identity/email': {},
    '/get-an-identity/email-confirmation': {
      '/get-an-identity/ask-questions': () => !emailHasIdentity(data) && !data.features.newAuth.on,
      '/get-an-identity/signed-in': () => emailHasIdentity(data) && data.features.newAuth.on,
      '/get-an-identity/account-created': () => data.features.newAuth.on
    },
    '/get-an-identity/signed-in-as': {
      '/get-an-identity/return-to-service': true
    },
    ...(newAuth)
    ? {
      '/get-an-identity/signed-in': {
        '/get-an-identity/check-answer-npq': () => data.features.newAuth.on,
      },
    }
    : {},

    ...(newAuth)
    ? {
      '/get-an-identity/account-created': {
        '/get-an-identity/official-name': () => data.features.newAuth.on,
      }
    }
    : {},
    '/get-an-identity/ask-questions': {},
    '/get-an-identity/official-name': {},
    '/get-an-identity/preferred-name': {},
    '/get-an-identity/dob': {
      '/get-an-identity/check-answers': () => userMatchesDQTRecord(data)
    },
    '/get-an-identity/have-nino': {
      '/get-an-identity/have-trn': { data: 'have-trn', value: 'no' },
      '/get-an-identity/have-qts': { data: 'have-nino', value: 'No' }
    },
    
    '/get-an-identity/nino': {
      '/get-an-identity/check-answers': () => userMatchesDQTRecord(data)
    },

    '/get-an-identity/have-trn': {
      '/get-an-identity/have-qts': { data: 'have-trn', value: 'no' }
    },
    '/get-an-identity/trn': {
      '/get-an-identity/check-answers': () => userMatchesDQTRecord(data)
    },
  
     
      
    '/get-an-identity/have-qts': {
      '/get-an-identity/check-answers': { data: 'has-qts', value: 'No' }
    },
    '/get-an-identity/how-qts': {},
    '/get-an-identity/check-answers': {
      '/get-an-identity/finish2': () => data.features.newAuth.on,
    },
    ...(noMatchJourney)
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
    ...(newAuth)
    ? {
      '/get-an-identity/finish2': {},

    }
    : {},
    '/get-an-identity/return-to-service': {}
  }

  return wizard(journey, req)
}
