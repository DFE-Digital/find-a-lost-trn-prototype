import { wizard } from 'govuk-prototype-rig'
import { userMatchesDQTRecord } from '../utils/dqt.js'

export function trnWizardPaths (req) {
  const paths = [
    '/start',
    '/trn-holder',
    '/ask-questions',
    '/name',
    '/dob',
    '/have-nino',
    '/nino',
    '/itt-provider',
    '/email',
    '/check-answers',
    '/trn-sent',
    '/no-match',
    '/helpdesk-request-submitted',
    '/'
  ]

  return wizard.nextAndBackPaths(paths, req)
}

export function trnWizardForks (req) {
  const forks = [
    {
      currentPath: '/trn-holder',
      storedData: ['wizard', 'do-you-have-a-trn'],
      values: ['No'],
      forkPath: '/you-dont-have-a-trn'
    },
    {
      currentPath: '/have-nino',
      storedData: 'have-nino',
      values: ['No'],
      forkPath: (value) => {
        if (userMatchesDQTRecord(req.session.data)) {
          return '/email'
        } else {
          return '/itt-provider'
        }
      }
    },
    {
      currentPath: '/nino',
      excludedValues: [],
      forkPath: (value) => {
        if (userMatchesDQTRecord(req.session.data)) {
          return '/email'
        } else {
          return '/itt-provider'
        }
      }
    },
    {
      currentPath: '/check-answers',
      excludedValues: [],
      forkPath: (value) => {
        if (req.session.data.features.apiUnavailable.on) {
          return 'helpdesk-request-submitted'
        } else if (userMatchesDQTRecord(req.session.data)) {
          return '/trn-sent'
        } else {
          return '/no-match'
        }
      }
    }
  ]
  return wizard.nextForkPath(forks, req)
}
