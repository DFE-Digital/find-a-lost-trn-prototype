import { exampleWizard } from '../wizards/example-wizard.js'

export const exampleWizardRoutes = router => {
  /**
   * Example routes to demonstrate using wizard helper.
   */
  router.all([
    '/examples/wizard',
    '/examples/wizard/:view'
  ], (req, res, next) => {
    res.locals.paths = exampleWizard(req)
    next()
  })

  router.post('/examples/wizard/:view', (req, res) => {
    res.redirect(res.locals.paths.next)
  })
}
