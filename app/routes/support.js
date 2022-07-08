export const supportRoutes = router => {
  router.all(['/support', '/support/:view'], (req, res, next) => {
    res.locals.serviceName = 'Support for Get an identity'
    next()
  })
}
