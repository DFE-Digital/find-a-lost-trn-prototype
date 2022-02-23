import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const journey = {
    '/examples/wizard': {},
    '/examples/wizard/name': {},
    '/examples/wizard/where-do-you-live': {
      // An example fork in the journey:
      // Go to the nationality page if the answer to the ‘Where do you live?’ page is not England
      '/examples/wizard/nationality': { data: 'wizard.where-do-you-live', excludedValue: 'England' }
    },
    '/examples/wizard/england': {},
    '/examples/wizard/nationality': {},
    '/examples/wizard/check-answers': {},
    '/examples/wizard/confirm': {},
    '/': {}
  }

  return wizard(journey, req)
}
