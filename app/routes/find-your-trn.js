import { trnWizardPaths, trnWizardForks } from '../wizards/find-your-trn.js'

export const findYourTrnRoutes = router => {
  /**
   * TRN wizard routes
   */
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
