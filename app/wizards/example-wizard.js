import _ from 'lodash'
import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const data = req.session.data
  const journey = {
    '/examples/wizard': {},
    '/examples/wizard/name': {},
    '/examples/wizard/where-do-you-live': {
      // An example fork in the journey:
      // Go to the nationality page if the answer to the ‘Where do you live?’ page is not England
      '/examples/wizard/nationality': () => _.get(data, 'wizard.where-do-you-live') !== 'England'
    },
    '/examples/wizard/england': {},
    '/examples/wizard/nationality': {},
    '/examples/wizard/check-answers': {},
    '/examples/wizard/confirm': {},
    '/': {}
  }

  return wizard(journey, req)
}
