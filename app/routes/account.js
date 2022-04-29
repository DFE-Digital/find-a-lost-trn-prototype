import wizard from '../wizards/account.js'

export const accountRoutes = router => {
  router.all('/account/:view', (req, res, next) => {
    res.locals.paths = wizard(req)
    res.locals.accountJourney = true
    res.locals.serviceName = req.session.data.accountServiceName || 'Create a teacher account'
    next()
  })

  router.post('/account/name', (req, res, next) => {
    const data = req.session.data
    if (!data.features.fullName.on) {
      req.session.data['full-name'] = `${req.body['first-name']} ${req.body['last-name']}`
      req.session.data['previous-name'] = `${req.body['previous-first-name']} ${req.body['previous-last-name']}`
    }
    next()
  })

  router.get('/account/email', (req, res) => {
    res.render('email')
  })

  router.get('/account/name', (req, res) => {
    res.render('name')
  })

  router.get('/account/dob', (req, res) => {
    res.render('dob')
  })

  router.get('/account/have-nino', (req, res) => {
    res.render('have-nino')
  })

  router.get('/account/nino', (req, res) => {
    res.render('nino')
  })

  router.get('/account/have-qts', (req, res) => {
    res.render('have-qts')
  })

  router.get('/account/how-qts', (req, res) => {
    res.render('how-qts')
  })

  router.get('/account/change-email-confirmation', (req, res) => {
    res.render('account/email-confirmation')
  })

  router.get('/account/return-to-service', (req, res) => {
    res.redirect(req.session.data.returnToService)
  })

  router.post(['/account/finish', '/account/signed-in-as'], (req, res, next) => {
    if (req.session.data.returnToService) {
      res.redirect(307, req.session.data.returnToService)
    } else {
      next()
    }
  })

  router.post('/account/:view', (req, res) => {
    res.redirect(res.locals.paths.next)
  })
}
