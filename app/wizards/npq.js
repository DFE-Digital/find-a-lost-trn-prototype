import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const journey = {
    '/npq/start': {},
    '/npq/chosen': {},
    '/npq/need-trn': {},
    '/get-an-identity/email': {}
  }

  return wizard(journey, req)
}
