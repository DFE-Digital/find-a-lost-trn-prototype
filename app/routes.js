import express from 'express'
import { exampleWizardRoutes } from './routes/example-wizard.js'
import { findLostTrnRoutes } from './routes/find-a-lost-trn.js'
import { apiRoutes } from './routes/api.js'

const router = express.Router()
exampleWizardRoutes(router)
findLostTrnRoutes(router)
apiRoutes(router)

export default router
