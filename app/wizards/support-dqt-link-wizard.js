import { wizard } from 'govuk-prototype-rig'

export default (req) => {
  const userId = req.params.user
  const basePath = `/support/${userId}`
  const journey = {
    [basePath]: {},
    [`${basePath}/link-dqt/trn`]: {},
    [`${basePath}/link-dqt/confirm`]: {
      [basePath]: {
        data: `support.users.${userId}.link-dqt`,
        value: 'No'
      },
      [`${basePath}?success=dqt-linked`]: () => {
        const user = req.session.data.support.users[userId]
        if (user['link-dqt'] === 'Yes') {
          delete Object.assign(user, { dqt: user['inactive-dqt'] })['inactive-dqt']
          delete user['link-dqt']
        }
        return true
      }
    }
  }

  return wizard(journey, req)
}
