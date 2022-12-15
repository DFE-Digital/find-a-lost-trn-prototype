import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const journey = {
    '/get-an-identity/check-answer-npq': {},
      '/get-an-identity/account-details': {},
    '/get-an-identity/edit-name': {
      '/get-an-identity/account-details?success=name': true
    }
  }
  return wizard(journey, req)
}
