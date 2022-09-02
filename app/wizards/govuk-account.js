import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const journey = {
    '/govuk-account/sign-in-or-create': {},
    '/govuk-account/enter-email-create': {},
    '/govuk-account/check-email': {},
    '/govuk-account/create-password': {},
    '/govuk-account/get-security-codes': {
      '/govuk-account/setup-authenticator-app': {
        data: 'govuk-account.security-codes',
        value: 'authenticator'
      }
    },
    '/govuk-account/enter-phone-number': {},
    '/govuk-account/check-your-phone': {
      '/govuk-account/account-created': true
    },
    '/govuk-account/setup-authenticator-app': {},
    '/govuk-account/account-created': {}
  }

  return wizard(journey, req)
}
