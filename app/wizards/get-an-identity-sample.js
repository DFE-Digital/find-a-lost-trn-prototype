import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const journey = {
    '/get-an-identity/have-trn': {
      '/get-an-identity/qts': { data: 'have-trn', value: 'No' }
    },
    '/get-an-identity/trn2': {},
    '/get-an-identity/check-answers': {},

   
  }
  return wizard(journey, req)
}
