import wizard from '../wizards/npq.js'

export const npqRoutes = router => {
  router.all('/npq/:view', (req, res, next) => {
    res.locals.paths = wizard(req)
    res.locals.npqJourney = true
    res.locals.serviceName = 'Register for a National Professional Qualification'
    next()
  })

  router.post('/npq/:view', (req, res) => {
    res.redirect(res.locals.paths.next)
  })
}
