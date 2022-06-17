import express from 'express'
import { exampleWizardRoutes } from './routes/example-wizard.js'
import { accountRoutes } from './routes/account.js'
import { findLostTrnRoutes } from './routes/find-a-lost-trn.js'
import { apiRoutes } from './routes/api.js'
import { userResearch } from './routes/user-research.js'

const router = express.Router()
exampleWizardRoutes(router)
accountRoutes(router)
findLostTrnRoutes(router)
apiRoutes(router)
userResearch(router)

router.get('/googled9cd283f899d5c89.html', (req, res) => {
  res.render('googled9cd283f899d5c89')
})

export default router
