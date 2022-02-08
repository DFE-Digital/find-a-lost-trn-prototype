import express from 'express'
import { exampleWizardRoutes } from './routes/example-wizard.js'
import { findYourTrnRoutes } from './routes/find-your-trn.js'
import { apiRoutes } from './routes/api.js'

const router = express.Router()
exampleWizardRoutes(router)
findYourTrnRoutes(router)
apiRoutes(router)

export default router
