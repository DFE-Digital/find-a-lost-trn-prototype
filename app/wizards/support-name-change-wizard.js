import { wizard } from 'govuk-prototype-rig'

export default (req, res) => {
  const userId = req.params.user
  const basePath = `/support/${userId}`
  const journey = {
    [basePath]: {},
    [`${basePath}/name-change/official-name`]: {
      [`${basePath}?success=name-change`]: () => {
        req.session.data.support.users[userId].name.verified = true
        return true
      }
    }
  }

  return wizard(journey, req)
}
