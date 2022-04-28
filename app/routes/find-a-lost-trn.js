import trnWizard from '../wizards/find-a-lost-trn.js'

export const findLostTrnRoutes = router => {
  router.post('/name', (req, res, next) => {
    const data = req.session.data
    if (!data.features.fullName.on) {
      req.session.data['full-name'] = `${req.body['first-name']} ${req.body['last-name']}`
      req.session.data['previous-name'] = `${req.body['previous-first-name']} ${req.body['previous-last-name']}`
    }
    next()
  })

  router.all('/:view', (req, res, next) => {
    res.locals.paths = trnWizard(req)
    res.locals.findTRNJourney = true
    next()
  })

  router.post('/:view', (req, res) => {
    res.redirect(res.locals.paths.next)
  })
}
