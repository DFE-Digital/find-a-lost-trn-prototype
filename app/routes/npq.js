import wizard from '../wizards/npq.js'

export const npqRoutes = router => {
  router.all('/npq/:view', (req, res, next) => {
    req.session.data.identityServiceName = 'Register for a National Professional Qualification'
    req.session.data.returnToService = '/npq/where-work'

    res.locals.paths = wizard(req)
    res.locals.npqJourney = true
    res.locals.getAnIdentityJourney = true
    res.locals.serviceUrl = '/npq/start'
    res.locals.serviceName = req.session.data.identityServiceName
    next()
  })

  router.post('/npq/where-work', (req, res) => {
    res.render('npq/where-work')
  })

  router.post('/npq/:view', (req, res) => {
    res.redirect(res.locals.paths.next)
  })
}
