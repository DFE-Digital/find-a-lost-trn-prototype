import wizard from '../wizards/account.js'

export const accountRoutes = router => {
  router.all('/account/:view', (req, res, next) => {
    res.locals.paths = wizard(req)
    res.locals.accountJourney = true
    res.locals.serviceName = req.session.data.accountServiceName || 'Create a teacher account'
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

  router.post('/account/:view', (req, res) => {
    res.redirect(res.locals.paths.next)
  })
}
