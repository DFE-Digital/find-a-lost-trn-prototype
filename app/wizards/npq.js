import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const data = req.session.data
  const journey = {
    '/npq/start': {},
    '/npq/chosen': {},
    '/user-research/scenario-1': {},
    '/account/return-to-service': {},
    '/npq/where-do-you-work': {}
  }

  return wizard(journey, req)
}
