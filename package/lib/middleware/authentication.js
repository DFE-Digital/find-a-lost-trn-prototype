import basicAuth from 'basic-auth'

/**
 * Simple basic access authentication middleware.
 *
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 * @param {Function} next - Next middleware callback
 * @returns {Function} Express middleware requiring the given credentials
 */
export function authentication (req, res, next) {
  const username = process.env.USERNAME
  const password = process.env.PASSWORD

  if (!username || !password) {
    console.error('Username or password is not set')
    return res.send('Username or password is not set')
  }

  const user = basicAuth(req)

  if (!user || user.name !== username || user.pass !== password) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
    return res.sendStatus(401)
  }

  next()
}
