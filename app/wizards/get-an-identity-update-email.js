import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const data = req.session.data
  
  const newAuth = data.features.newAuth.on
  const journey = {
  
    '/get-an-identity/signed-in-as': {},
    '/get-an-identity/edit-details': {},
    '/get-an-identity/change-email': {},

    '/get-an-identity/email-confirmation2': {

      '/get-an-identity/signed-in-as?success=email-update': true
    }
  }
  return wizard(journey, req)
}
