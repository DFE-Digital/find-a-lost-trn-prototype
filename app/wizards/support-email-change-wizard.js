import { wizard } from 'govuk-prototype-rig'

export default (req, res) => {
  const userId = req.params.user
  const basePath = `/support/${userId}`
  const journey = {
    [basePath]: {},
    [`${basePath}/email-change/email`]: {},
    [`${basePath}?success=email-change`]: {}
  }

  return wizard(journey, req)
}
