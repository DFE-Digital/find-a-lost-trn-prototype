import supportNameChangeWizard from '../wizards/support-name-change-wizard.js'
import supportDQTLinkWizard from '../wizards/support-dqt-link-wizard.js'

export const supportRoutes = router => {
  router.all(['/support', '/support/*'], (req, res, next) => {
    res.locals.serviceName = 'Support for Get an identity'
    next()
  })

  router.all(['/support/:user', '/support/:user/*'], (req, res, next) => {
    res.locals.user = req.session.data.support.users[req.params.user]
    res.locals.dataPath = `support.users.${req.params.user}`
    res.locals.urlPath = `/support/${req.params.user}`
    next()
  })

  router.all(['/support/:user/name-change', '/support/:user/name-change/*'], (req, res, next) => {
    res.locals.paths = supportNameChangeWizard(req, res)
    next()
  })

  router.all(['/support/:user/link-dqt', '/support/:user/link-dqt/*'], (req, res, next) => {
    res.locals.paths = supportDQTLinkWizard(req, res)
    next()
  })

  router.post('/support/:user/*', (req, res, next) => {
    if (res.locals.paths) {
      res.redirect(res.locals.paths.next)
    } else {
      next()
    }
  })

  router.all('/support/:user', (req, res) => {
    if (req.query.success) {
      switch (req.query.success) {
        case 'name-change':
          res.locals.appSuccess = { heading: 'Name changed successfully' }
          break
        case 'dqt-linked':
          res.locals.appSuccess = { heading: 'DQT record added' }
          break
        default:
          res.locals.appSuccess = { heading: 'Changes saved' }
          break
      }
    }

    res.render('support/user')
  })

  router.all('/support/:user/:view', (req, res) => {
    res.render(`support/${req.params.view}`)
  })

  router.all('/support/:user/:folder/:view', (req, res) => {
    res.render(`support/${req.params.folder}/${req.params.view}`)
  })
}
