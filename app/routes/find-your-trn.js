import { trnWizardPaths, trnWizardForks } from '../wizards/find-your-trn.js'

export const findYourTrnRoutes = router => {
  router.post('/name', (req, res, next) => {
    const data = req.session.data
    if (!data.features.fullName.on) {
      req.session.data['full-name'] = `${req.body['first-name']} ${req.body['last-name']}`
      req.session.data['previous-name'] = `${req.body['previous-first-name']} ${req.body['previous-last-name']}`
    }
    next()
  })

  router.get('/:view', (req, res, next) => {
    res.locals.paths = trnWizardPaths(req)
    next()
  })

  router.post('/:view', (req, res) => {
    const fork = trnWizardForks(req)
    const paths = trnWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
