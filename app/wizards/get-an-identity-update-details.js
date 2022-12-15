import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const journey = {
    '/get-an-identity/edit-preferred-name': {
      '/get-an-identity/signed-in-as?success=preferred-name': true
    }
  }
  return wizard(journey, req)
}
