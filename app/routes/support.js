export const supportRoutes = router => {
  router.all(['/support', '/support/*'], (req, res, next) => {
    res.locals.serviceName = 'Support for Get an identity'
    next()
  })

  router.all(['/support/:user', '/support/:user/*'], (req, res, next) => {
    res.locals.user = req.session.data.support.users[req.params.user]
    next()
  })

  router.all('/support/:user', (req, res) => {
    res.render('support/user')
  })

  router.all('/support/:user/:view', (req, res) => {
    res.render(`support/${req.params.view}`)
  })
}
