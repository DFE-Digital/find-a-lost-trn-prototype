import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const journey = {
    '/get-an-identity/signed-in-as': {},
    '/get-an-identity/edit-details': {},
    '/get-an-identity/edit-name': {
      '/get-an-identity/signed-in-as?success=name': true
    }
  }
  return wizard(journey, req)
}
