import wizard from '../wizards/govuk-account.js'

export const govukAccountRoutes = router => {
  router.all('/govuk-account/:view', (req, res, next) => {
    res.locals.paths = wizard(req)
    res.locals.govukAccountJourney = true
    res.locals.serviceName = false
    next()
  })

  router.post('/govuk-account/:view', (req, res) => {
    res.redirect(res.locals.paths.next)
  })
}
