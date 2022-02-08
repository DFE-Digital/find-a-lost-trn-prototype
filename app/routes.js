import express from 'express'
import { exampleWizardRoutes } from './routes/example-wizard.js'
import { findYourTrnRoutes } from './routes/find-your-trn.js'

const router = express.Router()
const newDomain = 'https://find-a-lost-trn.herokuapp.com/'

router.use(function (req, res, next) {
  return res.redirect(301, newDomain + req.url)
})

exampleWizardRoutes(router)
findYourTrnRoutes(router)

export default router
